package com.student.backend.user;

import java.util.UUID;

public record UserDTO(
        UUID userId,
        String email,
        String fistName,
        String lastName
)
{
}
