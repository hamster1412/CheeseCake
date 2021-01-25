CREATE DATABASE cheesecake;
USE cheesecake;

CREATE TABLE user(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE job(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    location TEXT,
    posted_time DATETIME,
    PRIMARY KEY (id)
);
