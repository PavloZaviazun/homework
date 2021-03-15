package com.service.demo.controllers;

import com.service.demo.dao.UserDAO;
import com.service.demo.models.User;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {
    private UserDAO userDAO;

    @PostMapping("/add")
    public void addUser() {
        userDAO.save(new User("Dasha" ,28));
    }

    @GetMapping("/getall")
    public List<User> getUsers() {
        return userDAO.getAll();
    }

    @GetMapping("/getbyid")
    public User getUser() {
        return userDAO.getById(5);
    }
}
