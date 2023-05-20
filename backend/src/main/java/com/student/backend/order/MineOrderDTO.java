package com.student.backend.order;

import com.student.backend.order.Enums.Status;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
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
  @NotBlank(message = "Product name is mandatory")
  @Size(min = 3, max = 50, message = "Product name must be between 3 and 50 characters")
  private String productName;
  private String productImage;
  @NotBlank(message = "Size is mandatory")
  @Size(min = 3, max = 10, message = "Size must be between 3 and 10 characters")
  private String productSize;
  @Min(value = 0L, message = "Price must be greater than zero")
  @Max(value = 100_000L, message = "Price mustn't be greater than 100,000")
  private Float productPrice;
  private int productQuantity;
}
