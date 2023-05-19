package com.student.backend;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Razoo onlineShop API", version = "1.0.1"))
public class App
{
  public static void main(String[] args)
  {
    SpringApplication.run(App.class, args);
  }

}

//TODO
//

//-----------------------------

//todo
// delete order dont work, because of ref to bridge table
// make err msg red color
// DONT use repo in controllers, only services
// change isGooglelogin to isGoogleUser


