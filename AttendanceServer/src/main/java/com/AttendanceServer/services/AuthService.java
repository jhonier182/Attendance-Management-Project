package com.AttendanceServer.services;


import com.AttendanceServer.dto.UserDTO;
import com.AttendanceServer.emuns.UserRole;
import com.AttendanceServer.entities.User;
import com.AttendanceServer.respository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    private void cretaAdminUser(){
        User optionalUser = userRepository.findByUserRole(UserRole.ADMIN); //miramos si ya existe como administrador
         if (optionalUser == null){
             User user = new User();

             user.setName("Admin");
             user.setEmail("admin@gmail.com");
             user.setUserRole(UserRole.ADMIN);
             user.setPassword("admin");

             userRepository.save(user);
             System.out.println("Admin User created");
         }else{
             System.out.println("Admin User Already Exists");
         }
    }

    public UserDTO login(UserDTO user) {
        Optional<User> dbUser = userRepository.findByEmail(user.getEmail());// Busca el usuario por correo
        if (dbUser.isPresent() && dbUser.get().getPassword().equals(user.getPassword())) { // Verifica si el usuario existe y la contraseña coincide
            return dbUser.get().userDto(); // Devuelve el usuario como DTO (inicio de sesión exitoso)
        } else {
            return null;
        }
    }


}
