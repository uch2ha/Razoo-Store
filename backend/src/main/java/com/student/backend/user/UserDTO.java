package com.student.backend.user;

import com.student.backend.user.Enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO
{
  private UUID userId;
  private String email;
  private String firstName;
  private String lastName;
  private Role role;
}