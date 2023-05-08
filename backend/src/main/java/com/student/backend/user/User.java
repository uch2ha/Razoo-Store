package com.student.backend.user;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity(name = "user")
@Table(name = "_user")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User
{
  @Id
  @GeneratedValue
  private UUID userId;

  @Column(unique = true, nullable = false)
  @NotBlank(message = "Email is mandatory")
  @Size(min = 3, max = 100, message = "Email must be between 3 and 100 characters")
  private String email;

  @Column(nullable = false)
  @NotBlank(message = "FirstName is mandatory")
  @Size(min = 3, max = 50, message = "FirstName must be between 3 and 50 characters")
  private String firstName;

  @Column(nullable = false)
  @NotBlank(message = "LastName is mandatory")
  @Size(min = 3, max = 50, message = "LastName must be between 3 and 50 characters")
  private String lastName;

  @Column(nullable = false)
  @NotBlank(message = "Password is mandatory")
  @Size(min = 3, max = 150, message = "Password must be between 3 and 150 characters")
  private String password;

  private boolean isGoogleLogin = false;
  private LocalDateTime createdAt = LocalDateTime.now();

}
