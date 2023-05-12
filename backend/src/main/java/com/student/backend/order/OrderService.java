package com.student.backend.order;

import com.student.backend.order.Enums.Status;
import com.student.backend.user.User;
import com.student.backend.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class OrderService
{
  private final OrderRepository orderRepo;
  private final UserRepository userRepository;


  public List<Order> findAll()
  {
    return orderRepo.findAll();
  }

  public Order createOrder(User user)
  {
    Order newOrder = Order.builder()
            .user(user)
            .createdAt(LocalDateTime.now())
            .status(Status.IN_PROCESS)
            .build();
    return orderRepo.save(newOrder);
  }

  public Optional<Order> findOneById(UUID id)
  {
    return orderRepo.findById(id);
  }

  public List<Order> findAllByUser(User user)
  {
    return orderRepo.findAllByUser(user); // userId
  }

  public void updateOne(Order order)
  {
    orderRepo.save(order);
  }

  public void delete(Order order)
  {
    orderRepo.delete(order);
  }

}
