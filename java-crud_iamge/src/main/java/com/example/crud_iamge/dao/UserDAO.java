package com.example.crud_iamge.dao;

import ch.qos.logback.core.net.server.Client;
import com.example.crud_iamge.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;

@EnableJpaRepositories
public interface UserDAO extends JpaRepository<User, Integer> {
    User findByEmail(String email);
}
