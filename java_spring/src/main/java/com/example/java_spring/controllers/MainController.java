package com.example.java_spring.controllers;

import com.example.java_spring.dao.UserDAO;
import com.example.java_spring.models.User;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@AllArgsConstructor
public class MainController {

    private UserDAO userDAO;

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }

    @GetMapping("/user")
    public User getUser() {
        User user1 = new User("Pasha");
        return user1;
    }

    @GetMapping("/users")
    public List <User> getUsers() {
        List<User> userList = userDAO.findAll();
        return userList;
    }

    @GetMapping("/saveUser")
    public void saveUser(@RequestParam String name) {
        User user = new User(name);
        userDAO.save(user);
    }

}
