package com.student.backend.order;

import com.student.backend.order.Enums.Status;
import lombok.Data;

@Data
public class OrderStatusRequestBody
{
  private Status status;
}
