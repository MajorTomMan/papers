package com.My.Server.entity;

import java.io.Serializable;

import lombok.Data;

@Data
public class User implements Serializable {
    private int id;
    private String name;
    private String password;
    private String lastname;
    private String firstname;
}
