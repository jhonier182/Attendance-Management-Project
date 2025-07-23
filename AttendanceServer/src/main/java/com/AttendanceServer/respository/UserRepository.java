package com.AttendanceServer.respository;

import com.AttendanceServer.emuns.UserRole;
import com.AttendanceServer.entities.User;
import jdk.jfr.Registered;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

@Registered
public interface UserRepository extends JpaRepository<User,Long> {

    User findByUserRole(UserRole role);

    Optional<User> findByEmail(String email);
}
