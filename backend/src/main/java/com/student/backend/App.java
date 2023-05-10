package com.student.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class App
{
  public static void main(String[] args)
  {
    SpringApplication.run(App.class, args);
  }
}

//TODO how to handle ManytoOne constructor

//todo ResponseEntity<Object> -> ResponseEntity<User>?
//todo validation only for creating?
//todo ResponseEntity<Object> for get methods ++++++++++++++++


