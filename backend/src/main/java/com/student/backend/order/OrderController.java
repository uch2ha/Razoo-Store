package com.student.backend.order;

import com.student.backend.order.Enums.Status;
import com.student.backend.order.requestBody.OrderCreateRequestBody;
import com.student.backend.order.requestBody.OrderStatusRequestBody;
import com.student.backend.orderProduct.OrderProductService;
import com.student.backend.product.Product;
import com.student.backend.product.ProductRepository;
import com.student.backend.user.User;
import com.student.backend.user.UserRepository;
import com.student.backend.user.UserService;
import com.student.backend.utils.CheckRoleAccess;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/orders")
@RequiredArgsConstructor
public class OrderController
{
  private final OrderDTOMapper orderDTOMapper;
  private final UserRepository userRepository;
  private final ProductRepository productRepository;
  private final OrderService orderService;
  private final UserService userService;
  private final OrderProductService orderProductService;
  private final CheckRoleAccess checkRoleAccess;
  private final OrderRepository orderRepository;

  @GetMapping
  public ResponseEntity<Object> findAll(Principal principal)
  {
    if (!checkRoleAccess.onlyAdmin(principal)) {
      return new ResponseEntity<>("no access", HttpStatus.FORBIDDEN);
    }

    List<OrderDTO> orders = orderService.findAll().stream().map(orderDTOMapper)
            .collect(Collectors.toList());

    return new ResponseEntity<>(orders, HttpStatus.OK);
  }

  @GetMapping("/mine")
  public ResponseEntity<Object> findAllMine(Principal principal)
  {

    if (principal instanceof Authentication authentication) {
      User user = (User) authentication.getPrincipal();
      List<MineOrderDTO> test = orderRepository.testMe(user.getUserId());

      return new ResponseEntity<>(test, HttpStatus.OK);
    }
    return null;
  }

  @PostMapping()
  public ResponseEntity<Object> createOrder(@RequestBody OrderCreateRequestBody data)
  {
    Optional<User> user = userRepository.findById(data.getUserId());
    if (user.isEmpty()) {
      return new ResponseEntity<>("User not found", HttpStatus.BAD_REQUEST);
    }

    Map<Product, Integer> productList = checkProductIdForExisting(data.getProducts());

    Order order = orderService.createOrder(user.get());
    Map<UUID, Map<UUID, Integer>> result = orderProductService.createManyRows(productList,
            order);

    return new ResponseEntity<>(result, HttpStatus.CREATED);
  }

  @GetMapping("/{orderId}")
  public ResponseEntity<Object> getAllByOrderId(Principal principal, @PathVariable UUID orderId)
  {
    Optional<Order> order = orderService.findOneById(orderId);

    if (order.isEmpty()) {
      return new ResponseEntity<>("Order not found", HttpStatus.NOT_FOUND);
    }

    UUID userId = order.get().getUser().getUserId();

    if (!checkRoleAccess.adminOrUserById(principal, userId)) {
      return new ResponseEntity<>("No access", HttpStatus.FORBIDDEN);
    }

    Map<UUID, Integer> productList = orderProductService.getAllByOrder(order.get());

    Map<String, Object> result =
            new HashMap<>();

    result.put("order", orderDTOMapper.apply(order.get()));
    result.put("products", productList);

    return new ResponseEntity<>(result, HttpStatus.OK);
  }

  @GetMapping("/user/{userId}")
  public ResponseEntity<Object> getAllByUserId(Principal principal, @PathVariable UUID userId)
  {
    if (!checkRoleAccess.adminOrUserById(principal, userId)) {
      return new ResponseEntity<>("No access", HttpStatus.FORBIDDEN);
    }

    Optional<User> user = userService.findById(userId);

    if (user.isEmpty()) {
      return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }

    List<Order> orderList = orderService.findAllByUser(user.get());
    List<Map<String, Object>> result = new ArrayList<>();

    orderList.forEach(o -> {
      Map<String, Object> oneOrder = new HashMap<>();
      Map<UUID, Integer> productList = orderProductService.getAllByOrder(o);
      oneOrder.put("order", orderDTOMapper.apply(o));
      oneOrder.put("products", productList);

      result.add(oneOrder);
    });

    return new ResponseEntity<>(result, HttpStatus.OK);
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

  //check productsList for existing of productId
  private Map<Product, Integer> checkProductIdForExisting(List<OrderCreateRequestBody.ProductRequest> products)
  {
    Map<Product, Integer> result = new HashMap<>();

    products.forEach(p -> {
      UUID productId = p.getProductId();
      Optional<Product> productOptional = productRepository.findById(productId);
      if (productOptional.isEmpty()) {
        throw new IllegalArgumentException("Product not found with id: " + productId);
      }
      Product product = productOptional.get();
      result.put(product, p.getQuantity());
    });

    return result;
  }

}