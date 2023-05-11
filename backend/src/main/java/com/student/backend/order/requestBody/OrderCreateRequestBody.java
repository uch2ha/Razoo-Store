package com.student.backend.order.requestBody;

import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
public class OrderCreateRequestBody
{
  private UUID userId;
  private List<ProductRequest> products;

  @Data
  public static class ProductRequest
  {
    private UUID productId;
    private Integer quantity;
  }
}