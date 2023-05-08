package com.student.backend.order;

import com.student.backend.user.User;
import com.student.backend.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrderService
{
  private final OrderRepository orderRepo;
  private final UserRepository userRepository;
  private final OrderDTOMapper orderDTOMapper;

  public List<OrderDTO> findAll()
  {
    return orderRepo.findAll().stream().map(orderDTOMapper)
            .collect(Collectors.toList());
  }

  public OrderDTO createOrder(OrderDTO order) throws Exception
  {
    User user = userRepository.findById(order.userId()).orElseThrow(() -> new Exception("User " +
            "not found"));
    Order newOrder = Order.builder().user(user).status(order.status()).build();
    Order savedOrder = orderRepo.save(newOrder);
    return orderDTOMapper.apply(savedOrder);
  }

}
