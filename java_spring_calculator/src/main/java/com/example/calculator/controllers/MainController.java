package com.example.calculator.controllers;

import com.example.calculator.dao.CalculatorDAO;
import com.example.calculator.models.Calculator;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@AllArgsConstructor
public class MainController {

    private CalculatorDAO calculatorDAO;

    @GetMapping("/calculator")
    public String calculate(@RequestParam String a, @RequestParam String action, @RequestParam String b) {
        double aValue = Double.parseDouble(a);
        double bValue = Double.parseDouble(b);
        double result = 0.0;
        String actionSign = "";
        String error = "";
        switch (action) {
            case "add" : {
                result = aValue + bValue;
                actionSign = "+";
                break;
            }
            case "sub" : {
                result = aValue - bValue;
                actionSign = "-";
                break;
            }
            case "div" : {
                if(bValue != 0) result = aValue / bValue;
                else error = "illegal value";
                actionSign = "/";
                break;
            }
            case "mult" : {
                result = aValue * bValue;
                actionSign = "*";
                break;
            }
            default: return "wrong action";
        }
        calculatorDAO.save(new Calculator((int)aValue, (int)bValue, actionSign.charAt(0), String.valueOf(result)));
        return error.isEmpty() ? String.format("%s %s %s = %s", a, actionSign, b, result) : error;
    }

}
