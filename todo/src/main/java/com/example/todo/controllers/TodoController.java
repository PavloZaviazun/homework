package com.example.todo.controllers;

import com.example.todo.dao.TodoDAO;
import com.example.todo.dao.TodoListDAO;
import com.example.todo.models.Todo;
import com.example.todo.models.TodoList;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Iterator;
import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:4200"})
public class TodoController {
    private TodoListDAO todoListDAO;
    private TodoDAO todoDAO;

    @GetMapping("/todolist/{id}/todos")
    public List <Todo> getTodos(@PathVariable int id) {
        TodoList one = todoListDAO.getOne(id);
        return one.getTodos();
    }

    @PostMapping("/todolist/{id}/todo/save")
    public void saveTodolist(@PathVariable int id, @RequestBody Todo todo) {
        TodoList one = todoListDAO.getOne(id);
        List <Todo> todos = one.getTodos();
        todos.add(todo);
        one.setTodos(todos);
        todoListDAO.save(one);
    }

    @PutMapping("/todolist/{id}/todo/{var}/update")
    public void updateTodoList(@PathVariable int id,
                               @PathVariable int var,
                               @RequestBody Todo todo) {
        TodoList one = todoListDAO.getOne(id);
        List <Todo> todos = one.getTodos();
        System.out.println("a");
        Todo el = todos.get(var);
        el.setTitle(todo.getTitle());
        el.setBody(todo.getBody());
        el.setFinalDate(todo.getFinalDate());
        one.setTodos(todos);
        todoListDAO.save(one);
    }

    @DeleteMapping("/todolist/{id}/todo/{var}/delete")
    public void deleteTodoList(@PathVariable int id,
                               @PathVariable int var) {
        TodoList one = todoListDAO.getOne(id);
        List <Todo> todos = one.getTodos();
        Todo todo = todos.get(var);
//        Iterator<Todo> iterator = todos.iterator();
//        while(iterator.hasNext()) {
//            Todo next = iterator.next();
//            if(next.getId() == var) iterator.remove();
//        }
        todos.remove(todo);
        one.setTodos(todos);
        todoListDAO.save(one);
        todoDAO.delete(todo);
    }

}
