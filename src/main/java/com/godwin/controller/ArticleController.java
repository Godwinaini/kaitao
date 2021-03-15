package com.godwin.controller;




import com.godwin.entity.Article;
import com.godwin.utils.*;
import com.godwin.service.ArticleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;



/**
 * Created by admin on 2020/12/17.
 */
@RestController
@RequestMapping("/kaitao")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping("/list")
    public ResultBean list(@RequestParam(defaultValue = "1") Integer page,
                            @RequestParam(defaultValue = "10") Integer limit){
        List<Article> data = articleService.getPager(page,limit).getContent();
        int count = articleService.findAll().size();
        ResultBean result = new ResultBean(0,"",count,data);
        return result;
    }

    @GetMapping("/query")
    public Page<Article> findByPage(Integer page){

        if(page==null||page<=0){
            page=0;
        }else {
            page -=1;
        }
        return articleService.findAll(page,5);
    }

    @PostMapping("/save")
    public Result<String> save(@RequestBody Article article){
        // 判断是新增还是修改
        if(article.getId()!=null){
            articleService.edit(article);
        }else{
            articleService.save(article);
        }
        return ResultUtil.ok();
    }


    @PostMapping("/remove")
    public Result<String> remove(@RequestBody Integer[] ids){
        articleService.deletes(ids);
        return ResultUtil.ok();
    }






    @GetMapping("/findById")
    public Article findArtById(Integer id){
        return articleService.findArtById(id);
    }







}
