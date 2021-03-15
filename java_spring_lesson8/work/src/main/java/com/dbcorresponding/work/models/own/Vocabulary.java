package com.dbcorresponding.work.models.own;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
@EqualsAndHashCode
@NoArgsConstructor
@ToString(exclude = {"words"})
public class Vocabulary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "vocabulary_id")
    List <Word> words = new ArrayList <>();

    public Vocabulary(String name, List <Word> words) {
        this.name = name;
        this.words = words;
    }
}
