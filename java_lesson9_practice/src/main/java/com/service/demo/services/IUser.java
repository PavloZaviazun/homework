package com.service.demo.services;

import com.service.demo.models.User;

import java.util.List;

public interface IUser {
    void save(User user);
    List <User> getAll();
    User getById(int id);
    void removeById(int id);
    void updateById(int id, String name, int age);
}
