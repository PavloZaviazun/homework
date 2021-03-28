package com.example.todo.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String body;
    private LocalDateTime finalDate;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private TodoList todoList;

}
