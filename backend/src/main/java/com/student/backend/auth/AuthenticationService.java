package com.student.backend.auth;

import com.student.backend.config.JwtUtils;
import com.student.backend.user.Enums.Role;
import com.student.backend.user.User;
import com.student.backend.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthenticationService
{
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtUtils jwtUtils;
  private final AuthenticationManager authenticationManager;

  public AuthenticationResponse register(RegisterRequest request)
  {
    User user = User.builder()
            .firstName(request.getFirstName())
            .lastName(request.getLastName())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .createdAt(LocalDateTime.now())
            // by default all user's role is USER
            .role(request.getRole() == Role.ADMIN ? Role.ADMIN : Role.USER)
            .build();
    userRepository.save(user);
    String jwtToken = jwtUtils.generateToken(user);
    return AuthenticationResponse.builder().token(jwtToken).build();
  }

  public AuthenticationResponse authenticate(AuthenticateRequest request)
  {
    authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                    request.getEmail(), request.getPassword()));

    User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    String jwtToken = jwtUtils.generateToken(user);
    return AuthenticationResponse.builder().token(jwtToken).build();
  }
}
