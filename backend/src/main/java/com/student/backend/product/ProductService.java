package com.student.backend.product;

import com.student.backend.s3.S3Buckets;
import com.student.backend.s3.S3Service;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class ProductService
{
  private final ProductRepository productRepo;
  private final S3Service s3;
  private final S3Buckets s3Buckets;

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

  public byte[] getProductImage(Product product)
  {
    return s3.getObject(
            s3Buckets.getBucket(),
            "product-images/news/%s/%s".formatted(product.getProductId(),
                    product.getImg()));
  }

  public byte[] getFixedProductImage(Product product)
  {
    return s3.getObject(
            s3Buckets.getBucket(),
            "product-images/fixed/%s/%s".formatted(product.getProductId(),
                    product.getImg()));
  }

  public byte[] getBasicProductImage(Product product)
  {
    return s3.getObject(
            s3Buckets.getBucket(),
            "product-images/%s/%s".formatted(product.getCategory(),
                    product.getCategory()));
  }

  public void uploadProductImage(Product product, MultipartFile file)
  {
    UUID productImgId = UUID.randomUUID();
    try {
      s3.putObject(s3Buckets.getBucket(),
              "product-images/news/%s/%s".formatted(product.getProductId(), productImgId),
              file.getBytes());

      product.setImg(productImgId);

      productRepo.save(product);
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }
}
