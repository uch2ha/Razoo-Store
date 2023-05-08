package com.student.backend.order;

import java.util.UUID;

public record OrderDTO(
        UUID orderId,
        UUID userId,
        String status
)
{
}
