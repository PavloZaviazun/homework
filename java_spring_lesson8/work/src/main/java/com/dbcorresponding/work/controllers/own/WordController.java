package com.dbcorresponding.work.controllers.own;

import com.dbcorresponding.work.dao.own.WordDAO;
import com.dbcorresponding.work.models.own.Translation;
import com.dbcorresponding.work.models.own.Word;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/word")
@AllArgsConstructor
public class WordController {
    private WordDAO wordDAO;

    @PostMapping("/add")
    public void add() {
        Translation translation1 = new Translation("ru");
        Translation translation2 = new Translation("ua");
        List<Translation> list = new ArrayList <>();
        list.add(translation1);
        list.add(translation2);
        Word word1 = new Word("hello");
        wordDAO.save(word1);
    }


}
