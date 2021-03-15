package com.dbcorresponding.work.controllers.own;

import com.dbcorresponding.work.dao.own.VocabularyDao;
import com.dbcorresponding.work.models.own.Vocabulary;
import com.dbcorresponding.work.models.own.Word;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/vocabulary")
@AllArgsConstructor
public class VocabularyController {
    private VocabularyDao vocabularyDao;

    @PostMapping("/add")
    public void getVocabulary() {
        Word word1 = new Word("Hindrance");
        Word word2 = new Word("Adjacent");
        List<Word> list = new ArrayList <>();
        list.add(word1);
        list.add(word2);
        vocabularyDao.save(new Vocabulary("IELTS", list));
    }
}
