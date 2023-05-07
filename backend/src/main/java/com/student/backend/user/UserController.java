package com.student.backend.user;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/users")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public List<User> findAll() throws Exception
    {
        return userService.getAllUsers();
    }

    @PostMapping
    public User createOne(@RequestBody User user){
        return userService.createUser(user);
    }

    @GetMapping("/{userId}")
    public User findById(@PathVariable UUID userId) throws Exception
    {
        return userService.getUserById(userId);
    }
}
