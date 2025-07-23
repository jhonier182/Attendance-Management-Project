package com.AttendanceServer.controller;

import com.AttendanceServer.dto.UserDTO;
import com.AttendanceServer.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/auth")
@CrossOrigin("*")
public class AuthController {

      @Autowired
    private AuthService authService;


      @PostMapping("/login")
      public ResponseEntity<?>login(@RequestBody UserDTO user){
             UserDTO dbuser = authService.login(user);
             if (dbuser == null){
                 return new ResponseEntity<>("Credenciales incorrectas",HttpStatus.UNAUTHORIZED);
             }
             return new ResponseEntity<>(dbuser,HttpStatus.OK);
      }

}
