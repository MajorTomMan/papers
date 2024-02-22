package com.my.server.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.my.server.entity.User;
import com.my.server.utils.R;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/login")
public class LoginController {
    @PostMapping("register")
    public R register(@RequestBody User user) {
        //TODO: process POST request
        return R.ok();
    }
    @PostMapping("login")
    public R login(@RequestBody User user) {
        //TODO: process POST request
        return R.ok();
    }
    
}