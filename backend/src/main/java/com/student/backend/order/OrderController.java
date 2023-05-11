package com.student.backend.order;

import com.student.backend.order.Enums.Status;
import com.student.backend.user.User;
import com.student.backend.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/orders")
@AllArgsConstructor
public class OrderController
{
  private final OrderDTOMapper orderDTOMapper;
  private final UserRepository userRepository;
  private final OrderService orderService;

  @GetMapping
  public ResponseEntity<Object> findAll()
  {
    List<OrderDTO> orders = orderService.findAll().stream().map(orderDTOMapper)
            .collect(Collectors.toList());

    return new ResponseEntity<>(orders, HttpStatus.OK);
  }

  @PostMapping("user/{userId}")
  public ResponseEntity<Object> createOrder(@PathVariable UUID userId)
  {
    Optional<User> user = userRepository.findById(userId);
    if (user.isEmpty()) {
      return new ResponseEntity<>("User not found", HttpStatus.BAD_REQUEST);
    }

    Order newOrder = orderService.createOrder(user.get());
    return new ResponseEntity<>(orderDTOMapper.apply(newOrder), HttpStatus.CREATED);
  }

  @GetMapping("/{orderId}")
  public ResponseEntity<Object> getAllByOrderId(@PathVariable UUID orderId)
  {
    Optional<Order> order = orderService.findOneById(orderId);

    if (order.isEmpty()) {
      return new ResponseEntity<>("Order not found", HttpStatus.NOT_FOUND);
    }

    return new ResponseEntity<>(orderDTOMapper.apply(order.get()), HttpStatus.OK);
  }

  @PatchMapping("/{orderId}")
  public ResponseEntity<Object> changeStatus(@PathVariable UUID orderId,
                                             @RequestBody OrderStatusRequestBody requestStatus)
  {
    Optional<Order> order = orderService.findOneById(orderId);

    if (order.isEmpty()) {
      return new ResponseEntity<>("Order not found", HttpStatus.NOT_FOUND);
    }

    Status status = requestStatus.getStatus();
    Order updatedOrder = order.get();

    updatedOrder.setStatus(status);
    orderService.updateOne(updatedOrder);

    return new ResponseEntity<>(orderDTOMapper.apply(updatedOrder), HttpStatus.OK);
  }

  @DeleteMapping("/{orderId}")
  public ResponseEntity<Object> deleteByOrderId(@PathVariable UUID orderId)
  {
    Optional<Order> order = orderService.findOneById(orderId);

    if (order.isEmpty()) {
      return new ResponseEntity<>("Order not found", HttpStatus.NOT_FOUND);
    }

    orderService.delete(order.get());

    return new ResponseEntity<>(orderDTOMapper.apply(order.get()), HttpStatus.OK);
  }
}
