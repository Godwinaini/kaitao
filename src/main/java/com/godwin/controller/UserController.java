package com.godwin.controller;

import com.godwin.entity.User;
import com.godwin.exception.UsernameNotException;
import com.godwin.service.UserService;
import com.godwin.utils.JsonResult;
import com.godwin.utils.Result;
import com.godwin.utils.ResultBean;
import com.godwin.utils.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.List;

/**
 * Created by admin on 2021/1/6.
 */
@RestController
@RequestMapping("/user")
public class UserController extends BaseController{

    @Autowired
    private UserService userService;

    @PostMapping("/reg")
    public JsonResult<Void> reg(User user)  {
        userService.reg(user);
        return new JsonResult<>(SUCCESS);
    }

    @PostMapping("/login")
    public JsonResult<User> login(String username,
                                  String password,
                                  HttpSession session){
        User data = userService.login(username,password);
        session.setAttribute("uid",data.getId());
        session.setAttribute("username",data.getUsername());

        return new JsonResult<>(SUCCESS,data);
    }

    @GetMapping("/get")
    public ResultBean get(){
        List<User> data = userService.findAll();
        int count = userService.findAll().size();
        ResultBean result = new ResultBean(0,"",count,data);
        return result;
    }

//    @PostMapping("/save")
//    public Result<String> save(@RequestBody User user){
//        //判断是新增还是修改
//        if (user.getId()!=null){
//            userService.edit(user);
//        }else {
//            userService.save(user);
//        }
//        return ResultUtil.ok();
//    }
//
//    @PostMapping("/remove")
//    public Result<String> remove(@RequestBody Integer[] ids){
//        userService.deletes(ids);
//        return ResultUtil.ok();
//    }
}

