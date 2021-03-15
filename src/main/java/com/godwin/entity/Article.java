package com.godwin.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * 文章信息实体类
 * Created by admin on 2020/12/17.
 */
@Entity
@Data
@Table(name = "article")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String title;
    private String type;
    private String reader;
    private String content;
    private String fileName;
}
