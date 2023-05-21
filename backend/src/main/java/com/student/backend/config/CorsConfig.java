package com.student.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer
{
  @Override
  public void addCorsMappings(CorsRegistry registry)
  {
    registry.addMapping("/**")
            .allowedOrigins("http://localhost:5173", "http://16.16.91.123:5173")
            .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE")
            .allowedHeaders("*")
            .exposedHeaders("Access-Control-Allow-Origin");
  }
}
