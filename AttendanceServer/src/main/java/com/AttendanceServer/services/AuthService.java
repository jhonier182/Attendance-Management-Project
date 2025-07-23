package com.AttendanceServer.services;


import com.AttendanceServer.emuns.UserRole;
import com.AttendanceServer.entities.User;
import com.AttendanceServer.respository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
