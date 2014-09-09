package com.scb.wb.dao;

import com.google.inject.Inject;
import com.scb.wb.domains.User;
import io.dropwizard.hibernate.AbstractDAO;
import org.hibernate.SessionFactory;

/**
 * Created by sabhinay on 9/9/14.
 */
public class UserDAO extends AbstractDAO<User>{

    @Inject
    public UserDAO(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    public User findById(Long id){
        return get(id);
    }
}
