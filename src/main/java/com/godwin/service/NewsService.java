package com.godwin.service;

import com.godwin.entity.News;

import java.util.List;

/**
 * Created by admin on 2020/12/30.
 */
public interface NewsService {
    News save(News news);
    News edit(News news);
    void deletes(Integer[] ids);
    List<News> findAll();
}
