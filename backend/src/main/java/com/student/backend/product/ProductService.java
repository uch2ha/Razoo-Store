package com.student.backend.product;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class ProductService
{
  private final ProductRepository productRepo;

  public Product createProduct(Product product){
    return productRepo.save(product);
  }
  public List<Product> getAllProducts(){
    return productRepo.findAll();
  }

  public Product getProductById(UUID id) throws Exception
  {
    return productRepo.findById(id).orElseThrow(()-> new Exception("Product not found"));
  }
}
