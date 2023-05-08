package com.student.backend.orderProduct;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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

//  @OneToMany(mappedBy = "product")
//  private List<Product> products;

  private int quantity;
}
