package com.godwin.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by admin on 2020/12/30.
 */
@Entity
@Data
@Table(name = "news")
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String fileName;
}
