DROP DATABASE IF EXISTS `robodel`;
SET default_storage_engine=InnoDB;
SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE DATABASE IF NOT EXISTS robodel
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_unicode_ci;
USE robodel;

-- Tables
CREATE TABLE Employee (
 Email varchar(250) NOT NULL,
 Password varchar(50) NOT NULL,
 FirstName varchar(100) NOT NULL,
 LastName varchar(100) NOT NULL,
 PhoneNumber varchar(20) NULL,
 Status boolean NOT NULL,
 Role varchar(50) NULL,
 City varchar(50) NULL,
 State char(50) NULL,
 Zip char(20) NULL,
 Country varchar(50) NULL,
 PRIMARY KEY (Email)
);

CREATE TABLE Courier (
  CourierID int UNSIGNED NOT NULL AUTO_INCREMENT,
  City varchar(50) NOT NULL,
  State char(50) NULL,
  Zip char(20) NULL,
  Country varchar(50) NOT NULL,
  PRIMARY KEY (CourierID)
);

CREATE TABLE HumanCourier (
  CourierID int UNSIGNED NOT NULL,
  Email varchar(250) NOT NULL,
  FOREIGN KEY (CourierID) REFERENCES Courier (CourierID),
  FOREIGN KEY (Email) REFERENCES Employee (Email)
);

CREATE TABLE Robot (
  RobotID int UNSIGNED NOT NULL,
  StateOfRobot varchar(60) NOT NULL,
  FOREIGN KEY (RobotID) REFERENCES Courier (CourierID)
);

CREATE TABLE EmployeeRobot (
  Email varchar(250) NOT NULL,
  RobotID int UNSIGNED NOT NULL,
  AssignedStartTime datetime NOT NULL,
  AssignedEndTime datetime NULL,
  StateOfRobot varchar(60) NOT NULL,
  FOREIGN KEY (Email) REFERENCES Employee (Email),
  FOREIGN KEY (RobotID) REFERENCES Robot (RobotID)
);

CREATE TABLE RobotStatistics (
  RobotID int UNSIGNED NOT NULL,
  StatisticsDateTime datetime NOT NULL,
  Speed decimal NULL,
  Battery decimal NULL,
  Longitude decimal NULL,
  Latitude decimal NULL,
  UNIQUE (RobotID, StatisticsDateTime),
  FOREIGN KEY (RobotID) REFERENCES Robot (RobotID)
);

CREATE TABLE Delivery (
  DeliveryID int UNSIGNED NOT NULL AUTO_INCREMENT,
  ToRestaurant datetime NULL,
  AtRestaurant datetime NULL,
  Loaded datetime NULL,
  FromRestaurant datetime NULL,
  AtCustomer datetime NULL,
  NoteSent datetime NULL,
  Delivered datetime NULL,
  PRIMARY KEY (DeliveryID)
);

CREATE TABLE DeliveryNote (
  Email varchar(250) NOT NULL,
  DeliveryID int UNSIGNED NOT NULL,
  CommentDateTime datetime NOT NULL,
  Comment varchar(500) NOT NULL,
  UNIQUE (Email, DeliveryID, CommentDateTime),
  FOREIGN KEY (Email) REFERENCES Employee (Email),
  FOREIGN KEY (DeliveryID) REFERENCES Delivery (DeliveryID)
);

CREATE TABLE CourierForDelivery (
  DeliveryID int UNSIGNED NOT NULL,
  CourierID int UNSIGNED NOT NULL,
  StartTime datetime NOT NULL,
  EndTime datetime NULL,
  UNIQUE (DeliveryID, CourierID),
  FOREIGN KEY (DeliveryID) REFERENCES Delivery (DeliveryID),
  FOREIGN KEY (CourierID) REFERENCES Courier (CourierID)
);

CREATE TABLE Restaurant (
  RestaurantID int UNSIGNED NOT NULL AUTO_INCREMENT,
  Name varchar(200) NOT NULL,
  Price decimal NULL,
  Type varchar(100) NULL,
  City varchar(50) NOT NULL,
  State char(50) NULL,
  Zip char(20) NULL,
  Country varchar(50) NOT NULL,
  Longitude decimal NULL,
  Latitude decimal NULL,
  PRIMARY KEY (RestaurantID)
);

CREATE TABLE Customer (
  CustomerID int UNSIGNED NOT NULL AUTO_INCREMENT,
  FirstName varchar(100) NULL,
  LastName varchar(100) NULL,
  Email varchar(250) NULL,
  PhoneNumber varchar(20) NULL,
  Street varchar(200) NOT NULL,
  City varchar(50) NOT NULL,
  State char(50) NULL,
  Zip char(20) NULL,
  Country varchar(50) NOT NULL,
  PRIMARY KEY (CustomerID)
);

CREATE TABLE `Order` (
  OrderID int UNSIGNED NOT NULL AUTO_INCREMENT,
  CustomerID int UNSIGNED NOT NULL,
  RestaurantID int UNSIGNED NOT NULL,
  DeliveryID int UNSIGNED NOT NULL,
  OrderDateTime datetime NOT NULL,
  OrderStatus varchar(100) NOT NULL,
  Longitude decimal NULL,
  Latitude decimal NULL,
  PRIMARY KEY (OrderID),
  FOREIGN KEY (CustomerID) REFERENCES Customer (CustomerID),
  FOREIGN KEY (RestaurantID) REFERENCES Restaurant (RestaurantID),
  FOREIGN KEY (DeliveryID) REFERENCES Delivery (DeliveryID)
);
