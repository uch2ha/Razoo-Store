package com.student.backend.product;

import com.student.backend.product.Emuns.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO
{
  private UUID productId;
  private String name;
  private String description;
  private String instruction;
  private String size;
  private Float price;
  private Category category;
}
