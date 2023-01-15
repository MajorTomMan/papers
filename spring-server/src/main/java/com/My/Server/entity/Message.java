package com.My.Server.entity;

import java.io.Serializable;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class Message implements Serializable {
    private String userName;
    private String sendingTime;
    private String content;
}
