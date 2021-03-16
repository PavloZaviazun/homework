package com.service.demo.controllers;

import com.service.demo.models.User;
import com.service.demo.services.UserService;
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
    private UserService userService;

    @PostMapping("/add")
    public void addUser() {
        userService.save(new User("Dasha" ,28));
    }

    @GetMapping("/getall")
    public List<User> getUsers() {
        return userService.getAll();
    }

    @GetMapping("/getbyid")
    public User getUser() {
        return userService.getById(5);
    }

    @PostMapping("/removebyid")
    public void removeById() {
        userService.removeById(2);
    }

    @PostMapping("/updatebyid")
    public void updateById() {
        userService.updateById(3, "Misha", 5);
    }
}
