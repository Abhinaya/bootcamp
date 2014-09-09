package com.scb.wb.resources;

import com.scb.wb.domains.User;
import io.dropwizard.jersey.params.LongParam;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/test")
@Produces(MediaType.APPLICATION_JSON)
public class TestResource {

    @GET
    public User getHome(){
        return User.findUser(new LongParam("1"));
    }
}
