package com.student.backend.orderProduct;

import com.student.backend.order.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface OrderProductRepository extends JpaRepository<OrderProduct, UUID>
{

  List<OrderProduct> findAllByOrder(Order order);
}
