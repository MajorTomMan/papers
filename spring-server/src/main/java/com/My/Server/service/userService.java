package com.My.Server.service;

import java.util.List;
import java.util.Map;

import com.My.Server.entity.User;

import org.springframework.stereotype.Service;


@Service
public interface userService {
    public void Insert(User user);
    public void Delete(User user);
    public void DeleteById(Integer id);
    public void Update(User user);
    public List<User> Query();
    public User QueryByName(String name);
    public User QueryById(Integer id);
}
