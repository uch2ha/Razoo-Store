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
@OpenAPIDefinition(info = @Info(title = "Razoo store API", version = "1.0.1"))

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


//todo
// delete order dont work, because of ref to bridge table
// change isGooglelogin to isGoogleUser
// make validation for all tables


