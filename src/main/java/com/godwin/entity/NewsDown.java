package com.godwin.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by admin on 2020/12/30.
 */
@Entity
@Data
@Table(name = "newsDown")
public class NewsDown {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;

}
