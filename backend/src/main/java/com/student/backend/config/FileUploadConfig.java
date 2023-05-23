package com.student.backend.config;

import jakarta.servlet.MultipartConfigElement;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.unit.DataSize;

@Configuration
public class FileUploadConfig
{

  @Bean
  public MultipartConfigElement multipartConfigElement()
  {
    MultipartConfigFactory factory = new MultipartConfigFactory();
    // Set the maximum file size (10MB)
    factory.setMaxFileSize(DataSize.parse("10MB"));
    // Set the maximum request size (10MB)
    factory.setMaxRequestSize(DataSize.parse("10MB"));
    return factory.createMultipartConfig();
  }
}
