package com.AttendanceServer.entities;

import com.AttendanceServer.dto.UserDTO;
import com.AttendanceServer.emuns.UserRole;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;
    private String name;
    private UserRole userRole;

    //creamos un metodo dto para el usuario
    public UserDTO userDto(){
        UserDTO dto = new UserDTO();

        dto.setId(id);
        dto.setEmail(email);
        dto.setUserRole(userRole);
        dto.setPassword(password);
        return dto;
    }
}
