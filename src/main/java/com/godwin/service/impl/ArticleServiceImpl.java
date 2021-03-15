package com.godwin.service.impl;


import com.godwin.entity.Article;
import com.godwin.repository.ArticleRepository;
import com.godwin.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;



import java.util.List;



/**
 * Created by admin on 2020/12/17.
 */
@Service
public class ArticleServiceImpl implements ArticleService {


    @Autowired
    private ArticleRepository repository;

    @Override
    public Article save(Article article) {
        return repository.save(article);
    }

    @Override
    public Article edit(Article article) {
        return repository.save(article);
    }

    @Override
    public void deletes(Integer[] ids) {
        repository.deletes(ids);
    }

    @Override
    public List<Article> findAll() {
        return repository.findAll();
    }

    @Override
    public Page<Article> getPager(Integer page, Integer limit) {
        Pageable pageable = PageRequest.of(page-1,limit);
        return repository.findAll(pageable);
        }

    @Override
    public Article findArtById(Integer id) {
        return repository.findArtById(id);
    }


    @Override
    public Page<Article> findAll(int page, int pageSize) {
        Pageable pageable = PageRequest.of(page,pageSize);
        return repository.findAll(pageable);
    }
}
