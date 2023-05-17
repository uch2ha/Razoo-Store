package com.student.backend.user;

import com.student.backend.user.Enums.Role;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Entity(name = "user")
@Table(name = "_user")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails
{
  @Id
  @GeneratedValue
  private UUID userId;

  @Column(unique = true, nullable = false)
  @NotBlank(message = "Email is mandatory")
  @Size(min = 3, max = 100, message = "Email must be between 3 and 100 characters")
  @Email
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

  @Column(nullable = false)
  @NotNull(message = "Role is mandatory")
  @Enumerated(EnumType.STRING)
  private Role role;

  private boolean isGoogleLogin = false;
  private LocalDateTime createdAt = LocalDateTime.now();


  @Override
  public Collection<? extends GrantedAuthority> getAuthorities()
  {
    return List.of(new SimpleGrantedAuthority("ROLE_" + role.name()));
  }

  @Override
  public String getUsername()
  {
    return email;
  }

  @Override
  public boolean isAccountNonExpired()
  {
    return true;
  }

  @Override
  public boolean isAccountNonLocked()
  {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired()
  {
    return true;
  }

  @Override
  public boolean isEnabled()
  {
    return true;
  }
}
