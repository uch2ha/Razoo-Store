package com.student.backend.user;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Service
@AllArgsConstructor
public class UserService
{

  private final UserRepository userRepo;
  private final UserDTOMapper userDTOMapper;

  public List<User> findAll()
  {
    return userRepo.findAll();
  }

  public User saveOne(@Valid User user)
  {
    return userRepo.save(user);
  }


  public Optional<User> findById(UUID id)
  {
    return userRepo.findById(id);
  }

  public void deleteById(User user)
  {
    userRepo.delete(user);
  }

  public User updateOne(User user)
  {
    return userRepo.save(user);
  }

}