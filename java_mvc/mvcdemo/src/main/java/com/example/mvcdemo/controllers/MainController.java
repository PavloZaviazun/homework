package com.example.mvcdemo.controllers;

import com.example.mvcdemo.dao.UserDao;
import com.example.mvcdemo.models.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Controller
@AllArgsConstructor
public class MainController {

    private UserDao userDao;

    @GetMapping("/hello")
    public String hello(Model model ) {
        model.addAttribute("x", "hello world");
        return "hello.html";
    }

    @PostMapping("/save")
    public String save(@RequestParam Map <String, String> map) {
        System.out.println(map);
        return "index.html";
    }

//    @GetMapping("/save")
//    public String saveGet(@RequestParam Map <String, String> map) {
//        System.out.println(map);
//        return "index.html";
//    }

    @GetMapping("/save")
    public String saveGet(@RequestParam("username") String name,
                          Model model
                          /*@RequestParam String userage*/) {
        System.out.println(name);
        userDao.save(new User(name));
        model.addAttribute("users", userDao.findAll());
        return "users.html";
    }

    @GetMapping("/")
    public String initial() {
        return "index.html";
    }

    @GetMapping("/users/{id}")
    public String getUser(@PathVariable("id") int userId, Model model) {
        User one = userDao.getOne(userId);
        model.addAttribute("user", one);
        return "user.html";
    }
}
