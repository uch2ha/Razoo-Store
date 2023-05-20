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
public class MineOrderDTO
{
  private UUID orderId;
  private Status status;
  private LocalDateTime createdAt;
  private UUID productId;
  private String productName;
  private String productImage;
  private String productSize;
  private Float productPrice;
  private int productQuantity;
}
