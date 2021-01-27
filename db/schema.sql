CREATE DATABASE cheesecake;
USE cheesecake;

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    role VARCHAR(120) NOT NULL DEFAULT "Student",
    PRIMARY KEY (id),
    token VARCHAR(255),
)

CREATE TABLE jobs(
    job_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(120) NOT NULL,
    company_id INT NOT NULL,
    description TEXT,
    location VARCHAR,
    posted_time DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE companies(
    company_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(120) NOT NULL,
    location VARCHAR,
    email VARCHAR(60),
    PRIMARY KEY (id)
)