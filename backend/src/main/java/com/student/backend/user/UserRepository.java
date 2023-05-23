package com.student.backend.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID>
{
  Optional<User> findByEmail(String email);

  @Query("SELECT userId " +
          "FROM _user")
  List<UUID> findAllUsersId();
}
