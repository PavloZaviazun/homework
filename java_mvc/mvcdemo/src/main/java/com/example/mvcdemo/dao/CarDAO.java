package com.example.mvcdemo.dao;

import com.example.mvcdemo.models.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarDAO extends JpaRepository <Car, Integer> {
}
