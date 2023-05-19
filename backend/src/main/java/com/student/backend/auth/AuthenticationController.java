package com.student.backend.auth;

import com.student.backend.user.User;
import com.student.backend.user.UserService;
import jakarta.validation.ConstraintViolationException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController
{

  private final AuthenticationService authService;
  private final PasswordEncoder passwordEncoder;
  private final UserService userService;

  @PostMapping("/register")
  public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request)
  {
    Optional<User> user = userService.findByEmail(request.getEmail());

    if (user.isEmpty()) {
      return ResponseEntity.ok(authService.register(request));
    }

    // if register user already exists with OAuth2 Google
    // concatenate them into 1 user in DB, with main info from OAuth2 Google
    if (user.get().isGoogleLogin()) {
      user.get().setPassword(passwordEncoder.encode(request.getPassword()));
      return ResponseEntity.ok(authService.concatAuthAndOAuth2(user.get()));
    }

    return ResponseEntity.ok(authService.register(request));
  }

  @PostMapping("/authenticate")
  public ResponseEntity<Object> authenticate(@RequestBody AuthenticateRequest request)
  {
    if (Objects.equals(request.getPassword(), "") || request.getPassword() == null) {
      return new ResponseEntity<>("Email or Password Cannot be Null", HttpStatus.BAD_REQUEST);
    }
    return ResponseEntity.ok(authService.authenticate(request));
  }

  // Validation
  @ExceptionHandler(ConstraintViolationException.class)
  public ResponseEntity<Object> handleConstraintViolationException(ConstraintViolationException ex)
  {
    Map<String, String> errors = new HashMap<>();
    ex.getConstraintViolations().forEach(constraintViolation -> {
      String fieldName = constraintViolation.getPropertyPath().toString();
      String errorMessage = constraintViolation.getMessage();
      errors.put(fieldName, errorMessage);
    });
    return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
  }
}
