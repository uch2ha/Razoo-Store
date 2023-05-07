package com.student.backend.order;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/orders")
@AllArgsConstructor
public class OrderController
{


  private final OrderService orderService;

  @GetMapping
  public List<Order> findAll(){
    return orderService.getAllOrders();
  }

  @PostMapping
  public Order saveOne(@RequestBody Order order){
    UUID user = order.getUser().getUserId();

    return orderService.createOrder(order);
  }
}
