package com.scb.wb.domains;

import com.codahale.metrics.annotation.Timed;
import com.scb.wb.dao.UserDAO;
import io.dropwizard.hibernate.UnitOfWork;
import io.dropwizard.jersey.params.LongParam;

import javax.jws.soap.SOAPBinding;
import javax.ws.rs.GET;
import javax.ws.rs.PathParam;
import java.sql.SQLOutput;

/**
 * Created by sabhinay on 9/9/14.
 */
public class User {
    private static UserDAO dao;
    public String name;

    @GET
    @Timed
    @UnitOfWork
    public static User findUser(@PathParam("id") LongParam id) {
        return dao.findById(id.get());
    }
}
