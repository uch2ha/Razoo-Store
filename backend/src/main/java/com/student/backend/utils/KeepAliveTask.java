package com.student.backend.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@Component
public class KeepAliveTask
{

  @Value("${cronJob.wakeup}")
  private String SERVER_URL;

  private final RestTemplate restTemplate;

  public KeepAliveTask(RestTemplate restTemplate)
  {
    this.restTemplate = restTemplate;
  }

  @Scheduled(fixedDelay = 300000) // Run every 5 minutes
  public void keepAlive()
  {
    // Send a GET request to server to keep it alive
    restTemplate.getForObject(SERVER_URL + "/wakeup", String.class);
    System.out.println("Ping sent to " + SERVER_URL);
  }

}

@RestController
@RequestMapping("/wakeup")
class wakeupController
{
  @GetMapping
  public ResponseEntity<String> wakeup()
  {
    return new ResponseEntity<>("Hello, world!", HttpStatus.OK);
  }
}
