package com.student.backend.auth.OAuth2Google;

import com.student.backend.auth.AuthenticationService;
import com.student.backend.auth.RegisterRequest;
import com.student.backend.user.User;
import com.student.backend.user.UserService;
import lombok.RequiredArgsConstructor;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/oauth2")
@RequiredArgsConstructor
public class OAuth2Controller
{
  private final AuthenticationService authService;
  private final UserService userService;

  @PostMapping("/authenticate")
  public ResponseEntity<Object> handleGoogleAuth(@RequestBody OAuth2RequestBody req) throws IOException, InterruptedException
  {
    // fetch user's data from Google
    JSONObject userData = fetchUserData(req.getAccess_token());
    if (userData == null) {
      return new ResponseEntity<>("User data not find", HttpStatus.UNAUTHORIZED);
    }

    Optional<User> user = userService.findByEmail(userData.getString("email"));

    // if user exists, and it was logged by google, just authenticate him
    if (user.isPresent() && user.get().isGoogleLogin()) {
      return ResponseEntity.ok(authService.googleAuthenticate(user.get()));
    }

    // if user exists, but it wasn't logged by Google
    // take user's data from Google and
    // override DB user firstName, lastName and isGoogleLogin properties
    if (user.isPresent()) {
      user.get().setFirstName(userData.getString("given_name"));
      user.get().setLastName(userData.getString("family_name"));
      user.get().setGoogleLogin(true);
      return ResponseEntity.ok(authService.concatAuthAndOAuth2(user.get()));
    }

    // if user dont exist, register him
    RegisterRequest regRequest = RegisterRequest.builder()
            .firstName(userData.getString("given_name"))
            .lastName(userData.getString("family_name"))
            .email(userData.getString("email"))
            .password("")
            .isGoogleLogin(true)
            .build();

    return ResponseEntity.ok(authService.register(regRequest));

  }

  private JSONObject fetchUserData(String accessToken) throws IOException, InterruptedException
  {
    String googleUserInfoEndpoint = "https://www.googleapis.com/oauth2/v3/userinfo";

    HttpClient httpClient = HttpClient.newHttpClient();
    HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(googleUserInfoEndpoint))
            .header("Authorization", "Bearer " + accessToken)
            .build();

    HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
    int responseCode = response.statusCode();

    if (responseCode == 200) {
      String responseBody = response.body();
      JSONObject result = null;
      try {
        result = new JSONObject(responseBody);
      } catch (JSONException err) {
        System.out.println("Error" + err.toString());
      }
      return result;
    }

    return null;
  }
}
