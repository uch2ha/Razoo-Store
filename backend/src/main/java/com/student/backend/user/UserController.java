package com.student.backend.user;

import jakarta.validation.ConstraintViolationException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/users")
@AllArgsConstructor
public class UserController
{

  private final UserService userService;

  @GetMapping
  public List<UserDTO> findAll()
  {
    return userService.findAll();
  }

  @PostMapping
  public ResponseEntity<Object> saveOne(@RequestBody User user)
  {
    return userService.saveOne(user);
  }

  @GetMapping("/{userId}")
  public ResponseEntity<Object> findById(@PathVariable UUID userId)
  {
    return userService.findById(userId);
  }

  @DeleteMapping("/{userId}")
  public ResponseEntity<Object> deleteById(@PathVariable UUID userId)
  {
    return userService.deleteById(userId);
  }

  @PatchMapping("/{userId}")
  public ResponseEntity<Object> updateOne(@PathVariable UUID userId, @RequestBody User user)
  {
    return userService.updateOne(userId, user);
  }

  @ExceptionHandler(ConstraintViolationException.class)
  public ResponseEntity<Object> handleConstraintViolationException(ConstraintViolationException ex)
  {
    Map<String, String> errors = new HashMap<>();
    ex.getConstraintViolations().forEach(constraintViolation -> {
      String fieldName = constraintViolation.getPropertyPath().toString();
      String errorMessage = constraintViolation.getMessage();
      errors.put(fieldName, errorMessage);
    });
    return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
  }
}
