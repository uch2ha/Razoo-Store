package com.student.backend.utils;

import com.student.backend.user.Enums.Role;
import com.student.backend.user.User;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Principal;
import java.util.UUID;

@Component
public class CheckRoleAccess
{
  public boolean onlyAdmin(Principal principal)
  {
    if (principal instanceof Authentication authentication) {
      User userDetails = (User) authentication.getPrincipal();

      Role role = getRole(userDetails);

      return role.equals(Role.ADMIN);
    }
    return false;
  }

  public boolean adminOrUserById(Principal principal, UUID userId)
  {
    if (principal instanceof Authentication authentication) {
      User userDetails = (User) authentication.getPrincipal();

      Role role = getRole(userDetails);

      if (role.equals(Role.ADMIN)) {
        return true;
      }

      return role.equals(Role.USER) && userDetails.getUserId().equals(userId);
    }
    return false;
  }

  public boolean notAdminHimSelf(Principal principal, UUID userId)
  {
    if (principal instanceof Authentication authentication) {
      User userDetails = (User) authentication.getPrincipal();
      return !userDetails.getUserId().equals(userId);

    }
    return false;
  }

  // Retrieve the user's role
  private Role getRole(UserDetails userDetails)
  {
    return userDetails.getAuthorities().stream()
            .map(GrantedAuthority::getAuthority)
            .map(authority -> authority.substring(5))
            .map(Role::valueOf)
            .findFirst()
            .orElse(null);
  }
}
