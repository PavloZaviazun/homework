package com.example.crud_iamge.controllers;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class Form {
    private String firstName;

    public Form(String firstName) {
        this.firstName = firstName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
}
