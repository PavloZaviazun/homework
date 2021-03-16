package com.service.demo.services;

import com.service.demo.dao.UserDAO;
import com.service.demo.models.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService implements IUser {
    private UserDAO userDAO;

    @Override
    public void save(User user) {
        userDAO.save(user);
    }

    @Override
    public List <User> getAll() {
        return userDAO.getAll();
    }

    @Override
    public User getById(int id) {
        return userDAO.getById(id);
    }

    @Override
    public void removeById(int id) {
        userDAO.removeById(id);
    }

    @Override
    public void updateById(int id, String name, int age) {
        userDAO.updateById(id, name, age);
    }
}
