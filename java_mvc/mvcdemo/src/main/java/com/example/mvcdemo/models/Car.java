package com.example.mvcdemo.models;

import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name="barandName")
    private Brand brand;
    private String model;
    private int year;

    public Car(Brand brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
