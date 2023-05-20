package com.student.backend.user;

import com.student.backend.user.Enums.Role;

import java.util.UUID;

public record UserDTO(
        UUID userId,
        String email,
        String firstName,
        String lastName,
        Role role
)
{
}
