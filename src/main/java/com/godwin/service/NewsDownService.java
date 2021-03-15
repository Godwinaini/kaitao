package com.godwin.service;

import com.godwin.entity.NewsDown;
import org.springframework.data.domain.Page;

import java.util.List;

/**
 * Created by admin on 2020/12/30.
 */
public interface NewsDownService {
    NewsDown save(NewsDown newsDown);
    NewsDown edit(NewsDown newsDown);
    void deletes(Integer[] ids);
    List<NewsDown> findAll();
    Page<NewsDown> getPager(Integer page, Integer limit);
}
