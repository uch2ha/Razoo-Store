package com.student.backend.order;

import com.student.backend.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;


@Repository
public interface OrderRepository extends JpaRepository<Order, UUID>
{
  List<Order> findAllByUser(User user);

  @Query("SELECT NEW com.student.backend.order.MineOrderDTO(o.orderId, o.status, o.createdAt, p" +
          ".productId, p.name, p.img, p.size, p.price, op.quantity) " +
          "FROM _order o " +
          "JOIN _orderProduct op ON o.orderId = op.order.orderId " +
          "JOIN _product p ON op.product.productId = p.productId " +
          "WHERE o.user.userId = :userId " +
          "ORDER BY o.createdAt DESC")
  List<MineOrderDTO> findAllMineOrders(@Param("userId") UUID userId);
}

