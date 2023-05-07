package com.student.backend.product;

import com.student.backend.product.Emuns.Category;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity(name = "product")
@Table(name = "product")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Product
{
  @Id
  @GeneratedValue
  private UUID productId;

  private String name;
  private String description;
  private String instruction;
  private String size;
  private Category category;
  private int price;
  private LocalDateTime createdAt = LocalDateTime.now();


}


