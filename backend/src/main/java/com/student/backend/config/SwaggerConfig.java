package com.student.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SwaggerConfig implements WebMvcConfigurer
{

  @Override
  public void addViewControllers(ViewControllerRegistry registry)
  {
    registry.addRedirectViewController("/", "/swagger-ui/index.html");
  }
}
