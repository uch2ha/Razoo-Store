package com.student.backend.orderProduct;

import com.student.backend.order.Order;
import com.student.backend.product.Product;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
@AllArgsConstructor
public class OrderProductService
{
  private final OrderProductRepository orderProductRepository;

  private void createOneRow(Product product, Order order, Integer quantity)
  {
    OrderProduct orderProduct = OrderProduct.builder()
            .order(order)
            .product(product)
            .quantity(quantity)
            .build();
    OrderProduct savedOrderProduct = orderProductRepository.save(orderProduct);
  }

  public Map<UUID, Map<UUID, Integer>> createManyRows(Map<Product, Integer> productList, Order order)
  {
    Map<UUID, Map<UUID, Integer>> result = new HashMap<>();
    Map<UUID, Integer> productListResult = new HashMap<>();

    for (Product product : productList.keySet()) {
      createOneRow(product, order, productList.get(product));
      productListResult.put(product.getProductId(), productList.get(product));
    }

    result.put(order.getOrderId(), productListResult);

    return result;
  }

  public Map<UUID, Integer> getAllByOrder(Order order)
  {
    Map<UUID, Integer> allProducts = new HashMap<>();
    List<OrderProduct> orderProducts = orderProductRepository.findAllByOrder(order);
    for (OrderProduct orderProduct : orderProducts) {
      allProducts.put(orderProduct.getProduct().getProductId(), orderProduct.getQuantity());
    }

    return allProducts;
  }
}
