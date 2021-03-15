package com.godwin.service;

import com.godwin.entity.Article;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;


/**
 * Created by admin on 2020/12/17.
 */
public interface ArticleService {
    Article save(Article article);
    Article edit(Article article);
    void deletes(Integer[] ids);
    List<Article> findAll();
    Page<Article> getPager(Integer page, Integer limit);
    Article findArtById(Integer id);
    Page<Article> findAll(int page, int pageSize);


}
