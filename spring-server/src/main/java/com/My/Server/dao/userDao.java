package com.My.Server.dao;

import java.util.List;

import com.My.Server.entity.User;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface userDao {
    public void Insert(User user);
    public void Delete(User user);
    public void DeleteById(Integer id);
    public void Update(User user);
    public List<User> Query();
    public List<User> QueryByName(String name);
    public List<User> QueryById(Integer id);
}
