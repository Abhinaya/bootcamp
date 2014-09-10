package com.scb.wb;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;

public class BootcampConfiguration extends Configuration {
    @JsonProperty
    private String env;

    public String getEnv() {
        return env;
    }
}