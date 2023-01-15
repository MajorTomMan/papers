package com.My.Server.controller;

import java.util.List;

import com.My.Server.entity.User;
import com.My.Server.service.userService;
import com.My.Server.utils.R;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
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
        userService.Insert(user);
        return R.ok();
    }

    @PostMapping("/delete")
    public R Delete(@RequestBody User user) {
        return R.ok();
    }

    @RequestMapping("/query/id/{id}")
    public R QueryUserById(@PathVariable Integer id) {
        List<User> user = userService.QueryById(id);
        return R.ok().put("data", user);
    }

    @RequestMapping("/query/name/{name}")
    public R QueryUserByName(@PathVariable String name) {
        List<User> user = userService.QueryByName(name);
        return R.ok().put("data", user);
    }

    @RequestMapping("/query")
    public R QueryUsers() {
        List<User> users = userService.Query();
        return R.ok().put("data", users);
    }

    @PostMapping("/update")
    public R Update(@RequestBody User user) {
        userService.Insert(user);
        return R.ok();
    }
}
