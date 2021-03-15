package com.dbcorresponding.work.models.own;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
@EqualsAndHashCode
@NoArgsConstructor
@ToString(exclude = "translations")
public class Word {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String word;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private Vocabulary vocabulary;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    List<Translation> translations = new ArrayList <>();

    public Word(String word) {
        this.word = word;
    }

    public Word(String word, List <Translation> translations) {
        this.word = word;
        this.translations = translations;
    }
}
