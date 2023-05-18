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
// routs w/o auth throw HTML err template
// ec2 http://ec2-16-16-91-123.eu-north-1.compute.amazonaws.com:8080, remove 8080 or?
// redux undefined after refresh page (problem in SHOP page)
// uudi conflict from sql file
// hashed psw always new

//-----------------------------
//todo Abraham
// userDetails interface
// PostConstruct + env

//todo
// delete order dont work, because of ref to bridge table


