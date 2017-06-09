CREATE DATABASE IF NOT EXISTS Burger;
USE Burgers_db;


DROP TABLE IF EXISTS Burgers;


CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);
