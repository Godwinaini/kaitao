package com.godwin.repository;

import com.godwin.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

/**
 * Created by admin on 2020/12/29.
 */
public interface UserRepository extends JpaRepository<User,Integer>{
    User findUserById(Integer id);
    User findByUsername(String username);

    //批量删除
    @Transactional
    @Modifying
    @Query(value="delete from user where id in ?1 ",nativeQuery=true)
    int deletes(Integer[] ids);
}
