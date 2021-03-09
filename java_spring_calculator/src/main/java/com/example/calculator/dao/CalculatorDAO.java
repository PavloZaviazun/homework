package com.example.calculator.dao;

import com.example.calculator.models.Calculator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface CalculatorDAO extends JpaRepository<Calculator, Integer> {
}
