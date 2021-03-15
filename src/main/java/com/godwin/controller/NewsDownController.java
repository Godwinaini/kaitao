package com.godwin.controller;


import com.godwin.entity.News;
import com.godwin.entity.NewsDown;
import com.godwin.service.NewsDownService;
import com.godwin.utils.Result;
import com.godwin.utils.ResultBean;
import com.godwin.utils.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by admin on 2020/12/30.
 */
@RestController
@RequestMapping("/newsdown")
public class NewsDownController {

    @Autowired
    private NewsDownService newsDownService;


    @GetMapping("/list")
    public ResultBean list(@RequestParam(defaultValue = "1") Integer page,
                           @RequestParam(defaultValue = "10") Integer limit){
        List<NewsDown> data = newsDownService.getPager(page,limit).getContent();
        int count = newsDownService.findAll().size();
        ResultBean result = new ResultBean(0,"",count,data);
        return result;
    }


    @PostMapping("/save")
    public Result<String> save(@RequestBody NewsDown newsDown){
        // 判断是新增还是修改
        if(newsDown.getId()!=null){
            newsDownService.edit(newsDown);
        }else{
            newsDownService.save(newsDown);
        }
        return ResultUtil.ok();
    }


    @PostMapping("/remove")
    public Result<String> remove(@RequestBody Integer[] ids){
        newsDownService.deletes(ids);
        return ResultUtil.ok();
    }

    @GetMapping("/get")
    public ResultBean get(){
        List<NewsDown> data = newsDownService.findAll();
        int count = newsDownService.findAll().size();
        ResultBean result = new ResultBean(0, "", count, data);
        return result;
    }
}
