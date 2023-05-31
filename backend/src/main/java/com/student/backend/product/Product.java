package com.student.backend.product;

import com.student.backend.product.Emuns.Category;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity(name = "_product")
@Table(name = "_product")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Product
{
  @Id
  @GeneratedValue
  private UUID productId;

  @Column(nullable = false)
  @NotBlank(message = "Product name is mandatory")
  @Size(min = 3, max = 50, message = "Product name must be between 3 and 50 characters")
  private String name;

  @Column(nullable = false)
  @NotBlank(message = "Description is mandatory")
  @Size(min = 3, max = 300, message = "Description must be between 3 and 200 characters")
  private String description;

  @Column(nullable = false)
  @NotBlank(message = "Instruction is mandatory")
  @Size(min = 3, max = 300, message = "Instruction must be between 3 and 100 characters")
  private String instruction;

  @Column(nullable = false)
  @NotBlank(message = "Size is mandatory")
  @Size(min = 3, max = 10, message = "Size must be between 3 and 10 characters")
  private String size;

  @Column(nullable = false)
  @Min(value = 0L, message = "Price must be greater than zero")
  @Max(value = 100_000L, message = "Price mustn't be greater than 100_000")
  private Float price;

  @Column(nullable = false)
  @NotNull(message = "Category is mandatory")
  @Enumerated(EnumType.STRING) //  save as String in db
  private Category category;

  private UUID img;

  // all fixed products' img store in fixed folder on s3
  // all non-fixed will be store in "new" folder
  private boolean isFixedProduct = false;

  private LocalDateTime createdAt = LocalDateTime.now();

}


