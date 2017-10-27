### Schema
-- DROP DATABASE IF EXISTS checkedin_db;
-- CREATE DATABASE checkedin_db;
-- USE checkedin_db;

-- CREATE TABLE checkedin_users
-- (
-- 	user_id int NOT NULL AUTO_INCREMENT,
--     linkedin_id varchar(255) not null,
-- 	first_name varchar(255) NOT NULL,
--     last_name varchar(255) NOT NULL,
--     picture varchar(255) NOT NULL,
--     email varchar(255),
-- 	created_at timestamp,
-- 	PRIMARY KEY (user_id)
-- );

-- CREATE TABLE checkedin_events
-- (
-- 	event_id int NOT NULL AUTO_INCREMENT,
--     event_host varchar(255) NOT NULL,
--     event_location varchar(255) NOT NULL,
--     event_name varchar(255) NOT NULL,
--     event_description varchar(255) NOT NULL,
--     event_keyword1 varchar(255) NOT NULL,
--     event_keyword2 varchar(255),
--     event_keyword3 varchar(255),
--     created_at timestamp,
-- 	PRIMARY KEY (event_id)
-- );

-- INSERT INTO checkedin_users (linkedin_id, first_name, last_name, picture, email) VALUES ('OFhJnVOmJe', 'steve', 'murphy', 'https://media.licdn.com/mpr/mprx/0_0zZIhXnofRAaHzQlDK5SkzBW0qAF7JQlDK57qVIofUgGOzoOZpke8lB2mBlfpzWAmX5Hku9Wj3rbSHIgsYdkc0noE3rFSHRlmYdkkObu03pbSHXs7wX79oUhyV2IpYEVR5zXCLF_EnTaauIjgEfdpp', 'stevesemail@gmail.com');
-- INSERT INTO checkedin_events (event_host, event_location, event_name, event_description, event_keyword1, event_keyword2) VALUES ('Steve Murphy', 'Krispy Kreme', 'Test Event','This is a test of our event system','optimistic','hopeful');
-- select * from checkedin_users;
-- select * from checkedin_events;