package com.student.backend.order;

import com.student.backend.user.User;
import com.student.backend.user.UserRepository;
import com.student.backend.user.UserService;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity(name = "order")
@Table(name = "_order")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Order
{

  @Id
  @GeneratedValue
  private UUID orderId;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;

  private String status;
  private LocalDateTime purchasedAt = LocalDateTime.now();

}
