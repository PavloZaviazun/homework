package com.dbcorresponding.work.dao.own;

import com.dbcorresponding.work.models.own.Word;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface WordDAO extends JpaRepository<Word, Integer> {
}
