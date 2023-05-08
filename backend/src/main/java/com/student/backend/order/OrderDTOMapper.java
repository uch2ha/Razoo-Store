package com.student.backend.order;

import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class OrderDTOMapper implements Function<Order, OrderDTO>
{
  @Override
  public OrderDTO apply(Order order)
  {
    return new OrderDTO(order.getOrderId(), order.getUser().getUserId(), order.getStatus());
  }

}
