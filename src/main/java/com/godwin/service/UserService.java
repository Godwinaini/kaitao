package com.godwin.service;

import com.godwin.entity.User;

import java.util.List;

/**
 * Created by admin on 2020/12/30.
 */
public interface UserService {
    //用户添加
    User save(User user);
    //查找用户名
    User findByUsername(String username);
    //根据id查找信息
    User findById(Integer id);
    //用户注册
    void reg(User user);
    //用户登录
    User login(String username, String password);

    User edit(User user);
    void deletes(Integer[] ids);
    List<User> findAll();
}
