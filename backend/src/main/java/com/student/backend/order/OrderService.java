package com.student.backend.order;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OrderService
{
  private final OrderRepository orderRepo;

  public List<Order> getAllOrders(){
    return orderRepo.findAll();
  }

  public Order createOrder(Order order){
    return orderRepo.save(order);
  }

}
