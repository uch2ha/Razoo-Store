package com.student.backend;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableScheduling
@OpenAPIDefinition(info = @Info(title = "Razoo onlineShop API", version = "1.0.1"))

public class App
{
  public static void main(String[] args)
  {
    SpringApplication.run(App.class, args);
  }

  @Bean
  public RestTemplate restTemplate()
  {
    return new RestTemplate();
  }

}

//TODO
// s3 public dont work
// notification.ts is components or utilities???
// FE logOut w/o reload()????? problem with caching or something

// SECURITY PART connectionTimeout=20000, maximumPoolSize=5

//-----------------------------

//todo
// JinOIN TABLES  orders
// delete order dont work, because of ref to bridge table
// make err msg red color
// DONT use repo in controllers, only services
// change isGooglelogin to isGoogleUser
// make validation for all tables
// order details make scrollable


