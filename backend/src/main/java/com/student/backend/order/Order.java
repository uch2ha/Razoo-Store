package com.student.backend.order;

import com.student.backend.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
  private LocalDateTime createdAt = LocalDateTime.now();

}
