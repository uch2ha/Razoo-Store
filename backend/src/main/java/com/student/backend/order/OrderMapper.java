package com.student.backend.order;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface OrderMapper
{
  OrderMapper INSTANCE = Mappers.getMapper(OrderMapper.class);

  @Mapping(source = "user.userId", target = "userId")
  OrderDTO orderToOrderDTO(Order order);
}
