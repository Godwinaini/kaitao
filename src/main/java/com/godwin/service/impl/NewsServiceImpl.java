package com.godwin.service.impl;

import com.godwin.entity.News;
import com.godwin.repository.NewsRepository;
import com.godwin.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by admin on 2020/12/30.
 */
@Service
public class NewsServiceImpl implements NewsService {

    @Autowired
    private NewsRepository newRepository;

    @Override
    public News save(News news) {
        return newRepository.save(news);
    }

    @Override
    public News edit(News news) {
        return newRepository.save(news);
    }

    @Override
    public void deletes(Integer[] ids) {
        newRepository.deletes(ids);
    }

    @Override
    public List<News> findAll() {
        return newRepository.findAll();
    }
}
