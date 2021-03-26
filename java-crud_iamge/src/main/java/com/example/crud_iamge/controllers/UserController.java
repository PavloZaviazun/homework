package com.example.crud_iamge.controllers;

import com.example.crud_iamge.dao.UserDAO;
import com.example.crud_iamge.models.User;
import lombok.AllArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class UserController {
    private UserDAO userDAO;
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public void signup(@RequestParam String email, @RequestParam String password) {
        System.out.println(email);
        System.out.println(password);
//        System.out.println(user);
//        String password = user.getPassword();
//        String encode = passwordEncoder.encode(password);
//        user.setPassword(encode);
//        userDAO.save(user);
    }

    @PostMapping("/user/save")
    public void saveUser(@RequestParam MultipartFile avatar,
                         @RequestParam String firstName,
                         @RequestParam String lastName,
                         @RequestParam int age,
                         @RequestParam String email,
                         @RequestParam String password) {
        String avatarName = "";

        if(avatar.getOriginalFilename().isEmpty()) {
            avatarName = "simpsons.png";
        } else {
            avatarName = avatar.getOriginalFilename();
            saveImage(avatar);
        }
        User user = new User(firstName, lastName, age, email, password, avatarName);
        userDAO.save(user);
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable int id) {
        return userDAO.getOne(id);
    }

    @GetMapping("/users")
    public List <User> getUsers() {
        return userDAO.findAll();
    }

    @PutMapping("/user/update/{id}")
    public void updateUser(@PathVariable int id,
                           @RequestParam MultipartFile avatar,
                           @RequestParam String firstName,
                           @RequestParam String lastName,
                           @RequestParam int age,
                           @RequestParam String email,
                           @RequestParam String password) {
        User user = userDAO.getOne(id);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setAge(age);
        user.setEmail(email);
        user.setPassword(password);
        if(!avatar.isEmpty()) {
            user.setAvatar(avatar.getOriginalFilename());
            saveImage(avatar);
        }
        userDAO.save(user);

    }

    @DeleteMapping("/user/delete/{id}")
    public void deleteUser(@PathVariable int id) {
        userDAO.delete(userDAO.getOne(id));
    }

    public void saveImage(MultipartFile avatar) {
        try {
            avatar.transferTo(new File(System.getProperty("user.home") + File.separator + "avatars" + File.separator + avatar.getOriginalFilename()));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
