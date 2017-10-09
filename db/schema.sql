### Schema

CREATE DATABASE checkedin_db;
USE checkedin_db;

CREATE TABLE checkins
(
	id int NOT NULL AUTO_INCREMENT,
	checkedin_name varchar(255) NOT NULL,
	checkedin_time timestamp,
	PRIMARY KEY (id)
);
