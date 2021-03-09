package com.example.calculator.models;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Calculator {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int a;
    private int b;
    private char action;
    private String result;

    public Calculator(int a, int b, char action, String result) {
        this.a = a;
        this.b = b;
        this.action = action;
        this.result = result;
    }
}
