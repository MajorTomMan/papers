package com.My.Server.controller;

import com.My.Server.entity.User;
import com.My.Server.service.userService;
import com.My.Server.utils.R;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping
public class userController {
    @Autowired
    private userService userService;

    @PostMapping("/insert")
    public R Insert(@RequestBody User user) {
        return R.ok();
    }

    @PostMapping("/delete")
    public R Delete(@RequestBody User user) {
        return R.ok();
    }

    @PostMapping("/query/{id}")
    public String QueryUserById(Integer id) {
        return null;

    }

    @PostMapping("/select")
    public Object QueryUserByName(@RequestBody String data) {
        
    }

    @PostMapping("/query")
    public String QueryUsers() {
    }

    @PostMapping("/update")
    public void Update(@RequestBody User user) {
    }
}
