package com.student.backend.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration
{
  private final JwtAuthFilter jwtAuthFilter;
  private final AuthenticationProvider authenticationProvider;

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception
  {

    http.csrf().disable()
            .cors()
            .and()
            .authorizeHttpRequests()
            // WHITELIST
            .requestMatchers(AUTH_WHITELIST).permitAll()
            .requestMatchers(HttpMethod.GET, "/api/v*/products/**").permitAll()
            //
            .requestMatchers(HttpMethod.GET, ADMIN_USER_ROUTES).hasAnyRole("ADMIN", "USER")
            .requestMatchers(HttpMethod.DELETE, ADMIN_ROUTES).hasRole("ADMIN")
            // User's Routes
            .requestMatchers(HttpMethod.POST, "/api/v*/users/**").hasRole("ADMIN")
            .requestMatchers(HttpMethod.PATCH, "/api/v*/users/**").hasAnyRole("ADMIN", "USER")
            // Order's Routes
            .requestMatchers(HttpMethod.POST, "/api/v*/orders/**").hasAnyRole("ADMIN", "USER")
            .requestMatchers(HttpMethod.PATCH, "/api/v*/orders/**").hasRole("ADMIN")
            // Product's Routes
            .requestMatchers(HttpMethod.POST, "/api/v*/products/**").hasRole("ADMIN")
            .anyRequest()
            .authenticated()
            .and()
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .authenticationProvider(authenticationProvider)
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
    return http.build();
  }

  private static final String[] AUTH_WHITELIST = {
          "/api/v*/auth/**",
          "/api/v*/oauth2/**",
          "/swagger-ui/**",
          "/swagger-ui.html"
  };

  private static final String[] ADMIN_USER_ROUTES = {
          "/api/v*/users/**",
          "/api/v*/orders/**"
  };

  private static final String[] ADMIN_ROUTES = {
          "/api/v*/users/**",
          "/api/v*/orders/**",
          "/api/v*/products/**"
  };
}
