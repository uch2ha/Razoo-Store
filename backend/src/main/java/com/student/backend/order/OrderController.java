package com.student.backend.order;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/orders")
@AllArgsConstructor
public class OrderController
{


  private final OrderService orderService;

  @GetMapping
  public List<OrderDTO> findAll()
  {
    return orderService.findAll();
  }

  @PostMapping
  public OrderDTO saveOne(@RequestBody OrderDTO order) throws Exception
  {
    return orderService.createOrder(order);
  }
}
