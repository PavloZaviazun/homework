package com.example.todo.controllers;

import com.example.todo.dao.TodoListDAO;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
@AllArgsConstructor
public class TodoListController {
    private TodoListDAO todoListDAO;

    @PostMapping("/todolist/save")
    public void saveTodolist(@RequestParam String name) {
        System.out.println(name);
    }

}
