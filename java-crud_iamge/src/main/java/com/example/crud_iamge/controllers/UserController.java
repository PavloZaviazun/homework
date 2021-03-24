package com.example.crud_iamge.controllers;

import com.example.crud_iamge.dao.UserDAO;
import com.example.crud_iamge.models.User;
import lombok.AllArgsConstructor;

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

    @PostMapping("/user/save")
    public void saveUser(@RequestParam String firstName,
                           @RequestParam String lastName,
                           @RequestParam int age,
                           @RequestParam String email,
                           @RequestParam String password,
                           @RequestParam MultipartFile avatar) {
        userDAO.save(new User(firstName, lastName, age, email, password, avatar.getOriginalFilename()));
        try {
            avatar.transferTo(new File(System.getProperty("user.home") + File.separator + "avatars" + File.separator + avatar.getOriginalFilename()));
        } catch (IOException e) {
            e.printStackTrace();
        }
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
    @ResponseBody
    public void updateUser(@PathVariable int id,
                            @RequestParam Form firstName
                            /*,
                           @RequestParam String firstName*//*,
                           @RequestParam String lastName,
                           @RequestParam int age,
                           @RequestParam String email,
                           @RequestParam String password,
                           @RequestParam MultipartFile avatar*/) {
        System.out.println(id);
        System.out.println(firstName.getFirstName());
        User user = userDAO.getOne(id);
//        user.setFirstName(firstName);
//        user.setLastName(lastName);
//        user.setAge(age);
//        user.setEmail(email);
//        user.setPassword(password);
//        user.setAvatar(avatar.getOriginalFilename());
        userDAO.save(user);
    }

    @DeleteMapping("/user/delete/{id}")
    public void deleteUser(@PathVariable int id) {
        userDAO.delete(userDAO.getOne(id));
    }


}
