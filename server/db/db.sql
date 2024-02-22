-- Active: 1708607962150@@192.168.227.128@3306
drop database if EXISTS chatroom;

CREATE DATABASE IF NOT EXISTS chatroom DEFAULT CHARACTER set utf8mb4;

CREATE TABLE IF NOT EXISTS chatroom.user( 
    `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
    `username` char(64) DEFAULT NULL COMMENT '用户名',
    `password` varchar(64) DEFAULT NULL COMMENT '密码',
    `nickname` varchar(64) DEFAULT NULL COMMENT '昵称',
    `mobile` varchar(20) DEFAULT NULL COMMENT '手机号码',
    `email` varchar(64) DEFAULT NULL COMMENT '邮箱',
    `header` varchar(500) DEFAULT NULL COMMENT '头像',
    `gender` tinyint(4) DEFAULT NULL COMMENT '性别',
    `birth` date DEFAULT NULL COMMENT '生日',
    `city` varchar(500) DEFAULT NULL COMMENT '所在城市',
    `job` varchar(255) DEFAULT NULL COMMENT '职业',
    `sign` varchar(255) DEFAULT NULL COMMENT '个性签名',
    `source_type` tinyint(4) DEFAULT NULL COMMENT '用户来源',
    `integration` int(11) DEFAULT NULL COMMENT '积分',
    `growth` int(11) DEFAULT NULL COMMENT '成长值',
    `status` tinyint(4) DEFAULT NULL COMMENT '启用状态',
    `create_time` datetime DEFAULT NULL COMMENT '注册时间',
    `social_uid` varchar(255) DEFAULT NULL COMMENT '社交用户的唯一id',
    `access_token` varchar(255) DEFAULT NULL COMMENT '访问令牌',
    `expires_in` varchar(255) DEFAULT NULL COMMENT '访问令牌的时间',
    PRIMARY KEY (`id`)
)DEFAULT CHARACTER SET utf8mb4;

select * from chatroom.user;