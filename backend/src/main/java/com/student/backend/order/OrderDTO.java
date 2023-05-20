package com.student.backend.order;

import com.student.backend.order.Enums.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO
{
  private UUID orderId;
  private UUID userId;
  private Status status;
  private LocalDateTime createdAt;

}
