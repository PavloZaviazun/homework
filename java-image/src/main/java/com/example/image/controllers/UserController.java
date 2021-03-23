package com.example.image.controllers;

import com.example.image.dao.UserDAO;
import com.example.image.models.User;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

@RestController
@AllArgsConstructor
public class UserController {
    private UserDAO userDAO;

    @PostMapping("/save")
    public void request(@RequestParam String name, @RequestParam MultipartFile img) {
        userDAO.save(new User(name, img.getOriginalFilename()));
        String pathToImage = System.getProperty("user.home") + File.separator + "pictures2";
        try {
            img.transferTo(new File(pathToImage + File.separator + img.getOriginalFilename()));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/{id}")
    public User getImage(@PathVariable int id) {
        User user = userDAO.getOne(id);
        return user;
    }

}

