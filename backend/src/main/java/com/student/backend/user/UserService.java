package com.student.backend.user;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;


@Service
@AllArgsConstructor
public class UserService
{

  private final UserRepository userRepo;

  public User createUser(User user){
    return userRepo.save(user);
  }
  public List<User> getAllUsers(){
    return userRepo.findAll();
  }

  public User getUserById(UUID id) throws Exception
  {
    return userRepo.findById(id).orElseThrow(()-> new Exception("User not found"));
  }

}