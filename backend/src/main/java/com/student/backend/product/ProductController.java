package com.student.backend.product;

import jakarta.validation.ConstraintViolationException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/products")
@AllArgsConstructor
public class ProductController
{
  private final ProductService productService;

  @GetMapping
  public ResponseEntity<Object> findAll()
  {
    List<ProductDTO> products = productService.findAll().stream()
            .map(ProductMapper.INSTANCE::productToProductDTO)
            .collect(Collectors.toList());

    return new ResponseEntity<>(products, HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<Object> saveOne(@RequestBody Product product)
  {
    Product newProduct = productService.saveOne(product);

    return new ResponseEntity<>(newProduct, HttpStatus.CREATED);
  }

  @GetMapping("/{productId}")
  public ResponseEntity<Object> findById(@PathVariable UUID productId)
  {
    Optional<Product> product = productService.findById(productId);

    if (product.isEmpty()) {
      return new ResponseEntity<>("Product not found", HttpStatus.NOT_FOUND);
    }

    ProductDTO result = ProductMapper.INSTANCE.productToProductDTO(product.get());

    return new ResponseEntity<>(result, HttpStatus.OK);
  }

  @DeleteMapping("/{productId}")
  public ResponseEntity<Object> deleteById(@PathVariable UUID productId)
  {
    Optional<Product> product = productService.findById(productId);

    if (product.isEmpty()) {
      return new ResponseEntity<>("Product not found", HttpStatus.NOT_FOUND);
    }

    productService.delete(product.get());

    return new ResponseEntity<>(product, HttpStatus.OK);
  }

  @PatchMapping("/{productId}")
  public ResponseEntity<Object> updateOne(@PathVariable UUID productId, @RequestBody Product product)
  {

    Optional<Product> existingProduct = productService.findById(productId);

    if (existingProduct.isEmpty()) {
      return new ResponseEntity<>("Product not found", HttpStatus.NOT_FOUND);
    }

    if (product.getName() != null) {
      existingProduct.get().setName(product.getName());
    }
    if (product.getDescription() != null) {
      existingProduct.get().setDescription(product.getDescription());
    }
    if (product.getInstruction() != null) {
      existingProduct.get().setInstruction(product.getInstruction());
    }
    if (product.getSize() != null) {
      existingProduct.get().setSize(product.getSize());
    }
    if (product.getPrice() != null) {
      existingProduct.get().setPrice(product.getPrice());
    }
    if (product.getCategory() != null) {
      existingProduct.get().setCategory(product.getCategory());
    }

    Product result = productService.updateOne(existingProduct.get());
    return new ResponseEntity<>(result, HttpStatus.OK);
  }

  @GetMapping("/{productId}/product-image")
  public ResponseEntity<Object> getProductImage(@PathVariable("productId") UUID productId
  )
  {
    Optional<Product> existingProduct = productService.findById(productId);

    if (existingProduct.isEmpty()) {
      return new ResponseEntity<>("Product not found", HttpStatus.NOT_FOUND);
    }

    Product product = existingProduct.get();

    if (product.isFixedProduct()) {
      byte[] image = productService.getFixedProductImage(product);
      return new ResponseEntity<>(image, HttpStatus.OK);
    }

    if (product.getImg() == null) {
      byte[] image = productService.getBasicProductImage(product);
      return new ResponseEntity<>(image, HttpStatus.OK);
    }

    byte[] image = productService.getProductImage(product);
    return new ResponseEntity<>(image, HttpStatus.OK);
  }

  @PostMapping(value = "/{productId}/product-image",
          consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<Object> uploadProductImage(@PathVariable("productId") UUID productId,
                                                   @RequestParam("file") MultipartFile file)
  {
    Optional<Product> existingProduct = productService.findById(productId);

    if (existingProduct.isEmpty()) {
      return new ResponseEntity<>("Product not found", HttpStatus.NOT_FOUND);
    }

    if (existingProduct.get().isFixedProduct()) {
      return new ResponseEntity<>("Fixed product's img cannot be changes", HttpStatus.NOT_FOUND);
    }

    productService.uploadProductImage(existingProduct.get(), file);
    Map<String, String> result = new HashMap<>();
    result.put("Success", "true");
    return new ResponseEntity<>(result, HttpStatus.OK);
  }

  // validation
  @ExceptionHandler(ConstraintViolationException.class)
  public ResponseEntity<Object> handleConstraintViolationException(ConstraintViolationException ex)
  {
    Map<String, String> errors = new HashMap<>();
    ex.getConstraintViolations().forEach(constraintViolation -> {
      String fieldName = constraintViolation.getPropertyPath().toString();
      String errorMessage = constraintViolation.getMessage();
      errors.put(fieldName, errorMessage);
    });
    return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
  }
}
