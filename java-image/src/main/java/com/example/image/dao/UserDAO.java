package com.example.image.dao;

import com.example.image.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RestController;

@EnableJpaRepositories
public interface UserDAO extends JpaRepository<User, Integer> {
}
