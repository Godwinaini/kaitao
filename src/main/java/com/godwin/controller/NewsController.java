package com.godwin.controller;

import com.godwin.entity.News;
import com.godwin.service.NewsService;
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
@RequestMapping("/news")
public class NewsController {

    @Autowired
    private NewsService newsService;

    @PostMapping("/save")
    public Result<String> save(@RequestBody News news){
        // 判断是新增还是修改
        if(news.getId()!=null){
            newsService.edit(news);
        }else{
            newsService.save(news);
        }
        return ResultUtil.ok();
    }


    @PostMapping("/remove")
    public Result<String> remove(@RequestBody Integer[] ids){
        newsService.deletes(ids);
        return ResultUtil.ok();
    }



    @GetMapping("/get")
    public ResultBean get(){
        List<News> data = newsService.findAll();
        int count = newsService.findAll().size();
        ResultBean result = new ResultBean(0, "", count, data);
        return result;
    }
}
