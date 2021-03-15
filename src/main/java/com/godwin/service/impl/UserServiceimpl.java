package com.godwin.service.impl;

import com.godwin.entity.User;
import com.godwin.exception.PasswordNotException;
import com.godwin.exception.UsernameNotException;
import com.godwin.exception.UsernameNotFoundException;
import com.godwin.repository.UserRepository;
import com.godwin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by admin on 2020/12/30.
 */
@Service
public class UserServiceimpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User findById(Integer id) {
        return userRepository.findUserById(id);
    }

    @Override
    public void reg(User user) {
        //判断用户名是否为null
        String username = user.getUsername();

        User result = userRepository.findByUsername(username);

        if(result != null){
            throw new UsernameNotFoundException("注册名被占用");
        }

        String password=user.getPassword();
        user.setUsername(username);
        user.setPassword(password);


        System.out.print(result);

        userRepository.save(user);
    }

    //用户登录业务逻辑
    @Override
    public User login(String username, String password) {
        User result=userRepository.findByUsername(username);

        if(result == null){
            throw new UsernameNotFoundException("用户名不存在");
        }

        if(!password.equals(result.getPassword())){
            throw new PasswordNotException("密码错误");
        }

        User user =new User();
        user.setUsername(username);
        user.setPassword(password);

        return user;
    }

    @Override
    public User edit(User user) {
        return userRepository.save(user);
    }

    @Override
    public void deletes(Integer[] ids) {
        userRepository.deletes(ids);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }
}
