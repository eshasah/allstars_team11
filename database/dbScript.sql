-- Create Database
CREATE DATABASE IF NOT EXISTS `CMPE280` DEFAULT CHARACTER SET utf8 COLLATE  utf8_general_ci;

-- Make DB default
use `CMPE280`;

-- Creating Tables
CREATE TABLE Vaccine_Recipient (
    user_id int NOT NULL AUTO_INCREMENT,
    full_name varchar(255) NOT NULL,
    gender varchar(25),
    age int NOT NULL,
    street varchar(25),
	city varchar(25),
	zip_code varchar(5),
    state varchar(30),
	phone_no varchar(16),
    email varchar(100) NOT NULL,
    password varchar(100) not null,
    PRIMARY KEY (user_id)
);
ALTER TABLE vaccine_recipient AUTO_INCREMENT=100;

CREATE TABLE dose (
    dose_id int NOT NULL AUTO_INCREMENT,
    dose_no varchar(255) NOT NULL,
    PRIMARY KEY (dose_id)
);
ALTER TABLE dose AUTO_INCREMENT=100;

CREATE TABLE slot (
	slot_id int NOT NULL AUTO_INCREMENT,
    start_time datetime NOT NULL,
    street varchar(45) NOT NULL,
    zip_code varchar(5) NOT NULL,
    city varchar(45) NOT NULL,
    state varchar(45) NOT NULL,
    PRIMARY KEY (slot_id)
);
ALTER TABLE slot AUTO_INCREMENT=100;

CREATE TABLE available_slot(
    slot_id int NOT NULL,
    dose_id int NOT NULL,
    numer_of_slots int DEFAULT 0,
    PRIMARY KEY (slot_id, dose_id)
    FOREIGN KEY (slot_id) REFERENCES slot(slot_id),
    FOREIGN KEY (dose_id) REFERENCES dose(dose_id)
)

CREATE TABLE appointment (
	apt_id int NOT NULL AUTO_INCREMENT,
    slot_id int NOT NULL,
    dose_id int NOT NULL,
    user_id int NOT NULL,
    apt_status varchar(15) NOT NULL,
    primary key(apt_id),
    FOREIGN KEY (slot_id) REFERENCES slot(slot_id),
    FOREIGN KEY (dose_id) REFERENCES dose(dose_id),
    FOREIGN KEY (user_id) REFERENCES vaccine_recipient(user_id)
);
ALTER TABLE appointment AUTO_INCREMENT=100;


