package com.student.backend.orderProduct;

import com.student.backend.order.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface OrderProductRepository extends JpaRepository<OrderProduct, UUID>
{

  List<OrderProduct> findAllByOrder(Order order);
}
