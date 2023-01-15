
drop database if EXISTS chatroom;

CREATE DATABASE IF NOT EXISTS chatroom DEFAULT CHARACTER set utf8mb4;

CREATE TABLE IF NOT EXISTS chatroom.user(
    id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(20) NOT NULL,
    pwd varchar(20) NOT NULL,
    lastname varchar(20) NOT NULL,
    firstname varchar(20) NOT NUll
)DEFAULT CHARACTER SET utf8mb4;

grant all on chatroom.* to master;

flush PRIVILEGES;

select * from chatroom.user;