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
        userDao.Delete(user);
    }

    @Override
    public void DeleteById(Integer id) {
        // TODO Auto-generated method stub
        userDao.DeleteById(id);
    }

    @Override
    public void Insert(User user) {
        // TODO Auto-generated method stub
        userDao.Insert(user);
    }

    @Override
    public List<User> Query() {
        // TODO Auto-generated method stub
        List<User> query = userDao.Query();
        return query;
    }

    @Override
    public List<User> QueryById(Integer id) {
        // TODO Auto-generated method stub
        List<User> user = userDao.QueryById(id);
        return user;
    }

    @Override
    public List<User> QueryByName(String name) {
        // TODO Auto-generated method stub
        List<User> user = userDao.QueryByName(name);
        return user;
    }

    @Override
    public void Update(User user) {
        // TODO Auto-generated method stub
        userDao.Update(user);
    }
}
