package com.student.backend.utils;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class KeepAliveTask
{
  private static final String SERVER_URL = "http://localhost:8080/";

  private final RestTemplate restTemplate;

  public KeepAliveTask(RestTemplate restTemplate)
  {
    this.restTemplate = restTemplate;
  }

  @Scheduled(fixedDelay = 600000) // Run every 10 minutes
  public void keepAlive()
  {
    // Send a GET request to server to keep it alive
    restTemplate.getForObject(SERVER_URL, String.class);
    System.out.println("Ping sent to " + SERVER_URL);
  }

}
