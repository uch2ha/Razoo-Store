package com.student.backend.user;

import com.student.backend.utils.CheckRoleAccess;
import jakarta.validation.ConstraintViolationException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/users")
@AllArgsConstructor
public class UserController
{

  private final UserService userService;
  private final UserRepository userRepo;
  private final UserDTOMapper userDTOMapper;
  private final CheckRoleAccess checkRoleAccess;

  @GetMapping
  public ResponseEntity<Object> findAll(Principal principal)
  {
    if (!checkRoleAccess.onlyAdmin(principal)) {
      return new ResponseEntity<>("no access", HttpStatus.FORBIDDEN);
    }

    List<UserDTO> users = userService.findAll().stream()
            .map(userDTOMapper)
            .collect(Collectors.toList());

    return new ResponseEntity<>(users, HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<Object> saveOne(@RequestBody User user)
  {
    Optional<User> existingUser = userRepo.findByEmail(user.getEmail());
    if (existingUser.isPresent()) {
      return new ResponseEntity<>("User with same email already exist",
              HttpStatus.BAD_REQUEST);
    }

    User newUser = userService.saveOne(user);

    UserDTO result = userDTOMapper.apply(newUser);

    return new ResponseEntity<>(result, HttpStatus.CREATED);

  }

  @GetMapping("/{userId}")
  public ResponseEntity<Object> findById(Principal principal, @PathVariable UUID userId)
  {
    if (!checkRoleAccess.adminOrUserById(principal, userId)) {
      return new ResponseEntity<>("No access", HttpStatus.FORBIDDEN);
    }

    Optional<User> user = userService.findById(userId);

    if (user.isEmpty()) {
      return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }

    return new ResponseEntity<>(user.map(userDTOMapper), HttpStatus.OK);
  }

  @DeleteMapping("/{userId}")
  public ResponseEntity<Object> deleteById(@PathVariable UUID userId)
  {
    Optional<User> user = userRepo.findById(userId);

    if (user.isEmpty()) {
      return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }

    userService.delete(user.get());

    return new ResponseEntity<>(user.map(userDTOMapper), HttpStatus.OK);
  }

  @PatchMapping("/{userId}")
  public ResponseEntity<Object> updateOne(Principal principal, @PathVariable UUID userId,
                                          @RequestBody User user)
  {
    if (!checkRoleAccess.adminOrUserById(principal, userId)) {
      return new ResponseEntity<>("No access", HttpStatus.FORBIDDEN);
    }

    Optional<User> existingUser = userRepo.findById(userId);

    if (existingUser.isEmpty()) {
      return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }

    // update properties of the existing user with new values
    if (user.getFirstName() != null) {
      existingUser.get().setFirstName(user.getFirstName());
    }
    if (user.getLastName() != null) {
      existingUser.get().setLastName(user.getLastName());
    }
    if (user.getPassword() != null) {
      existingUser.get().setPassword(user.getPassword());
    }

    User updatedUser = userService.updateOne(existingUser.get());

    return new ResponseEntity<>(userDTOMapper.apply(updatedUser), HttpStatus.OK);
  }

  // Validation
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
