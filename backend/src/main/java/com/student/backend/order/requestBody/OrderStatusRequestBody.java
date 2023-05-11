package com.student.backend.order.requestBody;

import com.student.backend.order.Enums.Status;
import lombok.Data;

@Data
public class OrderStatusRequestBody
{
  private Status status;
}
