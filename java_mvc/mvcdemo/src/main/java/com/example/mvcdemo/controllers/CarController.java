package com.example.mvcdemo.controllers;

import com.example.mvcdemo.dao.CarDAO;
import com.example.mvcdemo.models.Brand;
import com.example.mvcdemo.models.Car;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

@Controller
@AllArgsConstructor
public class CarController {

    private CarDAO carDao;

    @GetMapping("/carform")
    public String carForm() {
        return "carform.html";
    }

    @PostMapping("/savecar")
    public String postCar(@RequestParam Map <String, String> map) {
        carDao.save(new Car(Brand.valueOf(map.get("brand")), map.get("model"), Integer.parseInt(map.get("year"))));
        return "redirect:/cars";
    }

    @GetMapping("/cars")
    public String getCars(Model model) {
        model.addAttribute("cars", carDao.findAll());
        return "cars.html";
    }

    @GetMapping("/cars/{id}")
    public String getCar(@PathVariable int id, Model model) {
        model.addAttribute("car", carDao.findById(id));
        return "car.html";
    }

}
