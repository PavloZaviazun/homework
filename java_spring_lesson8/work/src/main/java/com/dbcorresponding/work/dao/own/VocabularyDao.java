package com.dbcorresponding.work.dao.own;

import com.dbcorresponding.work.models.own.Vocabulary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface VocabularyDao extends JpaRepository<Vocabulary, Integer> {
}
