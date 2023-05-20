package com.student.backend.product;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class ProductService
{
  private final ProductRepository productRepo;

  public List<Product> findAll()
  {
    Sort sortByCreatedAt = Sort.by(Sort.Direction.DESC, "createdAt");
    return productRepo.findAll(sortByCreatedAt);
  }

  public Product saveOne(@Valid Product product)
  {
    return productRepo.save(product);
  }

  public Optional<Product> findById(UUID id)
  {
    return productRepo.findById(id);
  }

  public void delete(Product product)
  {
    productRepo.delete(product);
  }

  public Product updateOne(Product product)
  {
    return productRepo.save(product);
  }
}
