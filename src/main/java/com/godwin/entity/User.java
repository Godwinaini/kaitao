package com.godwin.entity;

import lombok.Data;
import javax.persistence.*;

/**
 * Created by admin on 2020/12/29.
 */
@Entity
@Data
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String username;
    private String password;


}
