package com.godwin.service.impl;

import com.godwin.entity.NewsDown;
import com.godwin.repository.NewsDownRepository;
import com.godwin.service.NewsDownService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by admin on 2020/12/30.
 */
@Service
public class NewsDownServiceImpl implements NewsDownService{
    @Autowired
    private NewsDownRepository newsDownRepository;

    @Override
    public NewsDown save(NewsDown newsDown) {
        return newsDownRepository.save(newsDown);
    }

    @Override
    public NewsDown edit(NewsDown newsDown) {
        return newsDownRepository.save(newsDown);
    }

    @Override
    public void deletes(Integer[] ids) {
        newsDownRepository.deletes(ids);
    }

    @Override
    public List<NewsDown> findAll() {
        return newsDownRepository.findAll();
    }

    @Override
    public Page<NewsDown> getPager(Integer page, Integer limit) {
        Pageable pageable = PageRequest.of(page-1,10);
        return newsDownRepository.findAll(pageable);
    }
}
