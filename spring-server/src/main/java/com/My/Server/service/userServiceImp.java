package com.My.Server.service;

import java.util.List;

import com.My.Server.dao.userDao;
import com.My.Server.entity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class userServiceImp implements userService {
    @Autowired
    private userDao userDao;

    @Override
    public void Delete(User user) {
        // TODO Auto-generated method stub

    }

    @Override
    public void DeleteById(Integer id) {
        // TODO Auto-generated method stub

    }

    @Override
    public void Insert(User user) {
        // TODO Auto-generated method stub

    }

    @Override
    public List<User> Query() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public User QueryById(Integer id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public User QueryByName(String name) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void Update(User user) {
        // TODO Auto-generated method stub

    }
}
