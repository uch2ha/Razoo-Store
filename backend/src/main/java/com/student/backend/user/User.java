package com.student.backend.user;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.UUID;

@Entity(name = "user")
@Table(name = "users")
@Data
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue
    private UUID userId;

    private String email;
    private String password;

    public User(String email, String password){
        this.email = email;
        this.password = password;
    }
}
