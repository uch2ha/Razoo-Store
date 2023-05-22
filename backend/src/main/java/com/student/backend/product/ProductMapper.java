package com.student.backend.product;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ProductMapper
{
  ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

  ProductDTO productToProductDTO(Product product);
}
