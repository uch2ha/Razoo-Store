package com.student.backend.user;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class UserService
{

  private final UserRepository userRepo;
  private final UserDTOMapper userDTOMapper;

  public List<UserDTO> findAll()
  {
    return userRepo.findAll().stream()
            .map(userDTOMapper)
            .collect(Collectors.toList());
  }

  public ResponseEntity<Object> saveOne(User user)
  {
    Optional<User> existingUser = userRepo.findByEmail(user.getEmail());
    if (existingUser.isPresent()) {
      return new ResponseEntity<>("User with same email already exist", HttpStatus.BAD_REQUEST);
    }
    UserDTO result = userDTOMapper.apply(userRepo.save(user));
    return new ResponseEntity<>(result, HttpStatus.CREATED);
  }


  public ResponseEntity<Object> findById(UUID id)
  {
    Optional<UserDTO> user = userRepo.findById(id).map(userDTOMapper);

    if (user.isEmpty()) {
      return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity<>(user, HttpStatus.OK);
  }

  public ResponseEntity<Object> deleteById(UUID id)
  {
    Optional<User> user = userRepo.findById(id);

    if (user.isEmpty()) {
      return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }

    userRepo.delete(user.get());
    return new ResponseEntity<>(userDTOMapper.apply(user.get()), HttpStatus.OK);
  }

  public ResponseEntity<Object> updateOne(UUID id, User user)
  {
    Optional<User> existingUser = userRepo.findById(id);

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

    // save the updated user object and return userDTO
    UserDTO result = userDTOMapper.apply(userRepo.save(existingUser.get()));
    return new ResponseEntity<>(result, HttpStatus.OK);
  }

}