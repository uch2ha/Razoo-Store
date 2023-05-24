package com.student.backend;

import com.student.backend.user.Enums.Role;
import com.student.backend.user.User;
import com.student.backend.user.UserService;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Razoo onlineShop API", version = "1.0.1"))

public class App
{
  public static void main(String[] args)
  {
    SpringApplication.run(App.class, args);
  }

  @Bean
  CommandLineRunner runner(
          UserService userService, PasswordEncoder passwordEncoder)
  {
    return args -> {
      createAdmin(userService, passwordEncoder);
    };
  }


  private static void createAdmin(UserService userService, PasswordEncoder passwordEncoder)
  {
    User admin = User.builder()
            .email("admin@admin.com")
            .firstName("admin")
            .lastName("admin")
            .password(passwordEncoder.encode("admin"))
            .role(Role.ADMIN)
            .isGoogleLogin(false)
            .createdAt(LocalDateTime.now())
            .build();

    userService.saveOne(admin);
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


