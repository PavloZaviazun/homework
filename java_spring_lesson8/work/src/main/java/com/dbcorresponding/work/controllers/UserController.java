package com.dbcorresponding.work.controllers;

import com.dbcorresponding.work.dao.UserDAO;
import com.dbcorresponding.work.models.Car;
import com.dbcorresponding.work.models.Product;
import com.dbcorresponding.work.models.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/users")
public class UserController  {
    private UserDAO userDAO;

    @GetMapping("/add")
    public void adduser() {
        User user = new User("Pasha");
        List <Product> products = new ArrayList <>();
        products.add(new Product("hren"));
        products.add(new Product("red'ka"));
        List <Car> cars = new ArrayList <>();
        cars.add(new Car("subaru"));
        cars.add(new Car("mitsubishi"));
        user.setProducts(products);
        user.setCars(cars);
        userDAO.save(user);
    }

    @GetMapping()
    public List<User> getUsers() {
        return userDAO.findAll();
    }
}
