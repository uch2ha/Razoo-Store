package com.student.backend.user;

import jakarta.persistence.*;
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

  @Column(unique = true)
  private String email;
  private String firstName;
  private String lastName;
  private String password;
  private boolean isGoogleLogin = false;
  private LocalDateTime createdAt = LocalDateTime.now();

}
