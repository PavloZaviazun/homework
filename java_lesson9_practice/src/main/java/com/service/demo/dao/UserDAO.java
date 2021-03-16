package com.service.demo.dao;

import com.service.demo.models.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@AllArgsConstructor
public class UserDAO {
    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public void save(User user) {
        entityManager.persist(user);
    }

    public List <User> getAll() {
        return entityManager.createQuery("select u from User u", User.class).getResultList();
    }

    public User getById(int id) {
        return entityManager.createQuery("select u from User u where u.id =:id", User.class).setParameter("id", id).getSingleResult();
    }

    @Transactional
    public void removeById(int id) {
        User user = entityManager.find(User.class, id);
        entityManager.remove(user);
    }

    @Transactional
    public void updateById(int id, String name, int age) {
        User user = entityManager.find(User.class, id);
        user.setName(name);
        user.setAge(age);
    }

}
