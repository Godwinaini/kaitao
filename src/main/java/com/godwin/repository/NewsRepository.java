package com.godwin.repository;

import com.godwin.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by admin on 2020/12/30.
 */
public interface NewsRepository extends JpaRepository<News,Integer> {
    //批量删除
    @Transactional
    @Modifying
    @Query(value="delete from news where id in ?1 ",nativeQuery=true)
    int deletes(Integer[] ids);
}
