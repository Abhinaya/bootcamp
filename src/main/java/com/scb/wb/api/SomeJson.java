package com.scb.wb.api;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SomeJson {

    public SomeJson(){

    }

    public SomeJson(String text){
        this.name = text;
    }

    @JsonProperty
    private String name;
}
