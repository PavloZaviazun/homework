package com.example.mvcdemo.models;

import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
//@Table(name="Client")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name="user_id")
    private int id;
    private String name;

    public User(String name) {
        this.name = name;
    }
}
