package com.student.backend.user;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper
{
  UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

  UserDTO userToUserDTO(User user);
}
