package com.godwin.repository;


import com.godwin.entity.Article;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import org.springframework.transaction.annotation.Transactional;




/**
 * 操作数据库
 * Created by admin on 2020/12/17.
 */
public interface ArticleRepository extends JpaRepository<Article,Integer> {
    //批量删除
    @Transactional//管理事务,UPDATE或者DELETE操作需要使用事务，必须加
    @Modifying
    //@Query注解查询适用于所查询的数据无法通过关键字查询得到结果的查询。这种查询可以摆脱像关键字查询那样的约束，将查询直接在相应的接口方法中声明，结构更为清晰，这是Spring Data的特有实现。
    @Query(value="delete from article where id in ?1 ",nativeQuery=true)//nativeQuery=true表明是一个原生的sql语句，可以去数据库表中去查询
    int deletes(Integer[] ids);

    Article findArtById(Integer id);





}
