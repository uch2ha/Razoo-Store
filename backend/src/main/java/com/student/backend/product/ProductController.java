package com.student.backend.product;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
@AllArgsConstructor
public class ProductController
{
  private final ProductService productService;

  @GetMapping
  public List<Product> findAll(){
    return productService.getAllProducts();
  }

  @PostMapping
  public Product createOne(@RequestBody Product product){
    return productService.createProduct(product);
  }
}
