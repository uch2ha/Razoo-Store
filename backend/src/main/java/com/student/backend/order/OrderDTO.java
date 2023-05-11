package com.student.backend.order;

import com.student.backend.order.Enums.Status;

import java.time.LocalDateTime;
import java.util.UUID;

public record OrderDTO(
        UUID orderId,
        UUID userId,
        Status status,
        LocalDateTime createdAt
)
{
}
