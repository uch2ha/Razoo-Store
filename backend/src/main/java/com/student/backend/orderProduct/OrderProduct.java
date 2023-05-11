package com.student.backend.orderProduct;

import com.student.backend.order.Order;
import com.student.backend.product.Product;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity(name = "orderProduct")
@Table(name = "_orderProduct")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderProduct
{
  @Id
  @GeneratedValue
  private UUID orderProductId;

  @ManyToOne
  @JoinColumn(name = "order_id")
  private Order order;

  @ManyToOne
  @JoinColumn(name = "product_id")
  private Product product;

  private int quantity;
}
