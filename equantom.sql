-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 25, 2019 at 01:15 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.1.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `equantom`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `rating` decimal(2,1) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `category` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `rating`, `price`, `img_url`, `category`) VALUES
(3, 'Apple EarPods with Lightning Connector - White', '4.0', '26.99', 'apple-earpods_1.jpg', 4),
(4, 'Bose QuietComfort 35 Wireless Headphones II, Noise-Cancelling', '4.5', '349.00', 'bose-quietComfort_1.jpg', 4),
(5, 'Sony Noise Cancelling Headphones WH1000XM3', '4.5', '348.00', 'sony-noise-cancelling_1.jpg', 4),
(6, 'Samsung Galaxy Buds, Bluetooth True Wireless Earbuds', '4.0', '199.99', 'samsung-galaxy-buds_1.jpg', 4),
(7, 'COWIN E7 Active Noise Cancelling Headphones Bluetooth Headphones', '4.5', '59.99', 'cowin-e7_1.jpg', 4),
(8, 'Huawei Mate SE Factory Unlocked 5.93” - 4GB/64GB Octa-core Processor', '4.5', '219.99', 'huawei-mate-se.jpg', 3),
(9, 'BLU Studio Mega 2018-6.0” HD Unlocked Smartphone', '3.5', '69.99', 'blu-studio-mega.jpg', 3),
(10, 'Xiaomi Redmi Note 6 Pro 64GB / 4GB RAM', '4.5', '184.59', 'xiaomi-redmi-note-6.jpg', 3),
(11, 'Huawei Honor 8X (64GB + 4GB RAM) 6.5\" HD 4G LTE', '4.5', '211.00', 'huawei-honor-8x.jpg', 3),
(12, 'Samsung Galaxy A10 32GB SM-A105M/DS 6.2\" HD+ Infinity-V', '5.0', '143.00', 'samsung-galaxy-a10.jpg', 3),
(13, 'Samsung Galaxy M30 6.4\" 5000 mAh 64GB GSM Unlocked Smartphone', '5.0', '259.99', 'samsung-galaxy-m30.jpg', 3),
(14, 'Smart Watch Relogio Bluetooth Smartwatch U8', '2.0', '39.99', 'smart-watch-U8.jpg', 1),
(15, 'Apple Watch Series 3 38 mm de Alumínio e Pulseira Esportiva ', '5.0', '589.00', 'apple-watch-3.jpg', 1),
(16, 'Lenovo Chromebook S330 Laptop, 14-Inch FHD (1920 x 1080) Display', '4.0', '219.90', 'lonovo-chromebookS330.jpg', 2),
(17, 'Acer Chromebook R 11 Convertible, 11.6-Inch HD Touch, Intel Celeron N3150, 4GB ', '4.0', '271.95', 'acer-chromebookR11.jpg', 2);

-- --------------------------------------------------------

--
-- Table structure for table `product_categories`
--

CREATE TABLE `product_categories` (
  `idcategory` int(11) NOT NULL,
  `categoryname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_categories`
--

INSERT INTO `product_categories` (`idcategory`, `categoryname`) VALUES
(1, 'watches'),
(2, 'laptop'),
(3, 'smartphone'),
(4, 'headphone');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `admin` int(1) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`,`username`,`admin`, `email`, `password`) VALUES
(3, 'wefewhf',0, 'wefeiuwf@gmail.com', '$2a$10$43F6yQOIbQ3/aER/XB2d4OP9qsV1K988Y4/OOE5OWVFDHk6pB7AY2'),
(4, 'amin',1, 'admin@admin.com', '$2a$10$HQYJU216Wu3RtKPdbR8aqu/04gNUdxn6EpcWc73vn5BiHoVCFCnES'),
(5, 'rafael',0, 'rafaelgoulartb@gmail.com', '$2a$10$nxrkZIRafbTsgtJTcFfgleVkuuH/MmzwGUvbIhH0VKb4AdUgDJawq'),
(6, 'opresor',0, 'opresor@protonmail.com', '$2a$10$RgS9EYuOxhwODKmTgBlK9OOUbDE8bmcRRf8Yi4kraLzfVpdkW5lT.'),
(7, 'ewfwf',0, 'wfewefw@ewfwfw.com', '$2a$10$OWbDkDphF.L11kIGiz1YzuXj7tYzs9b1hh/yHp9UkY2ciMlQ1CHqW'),
(8, 'wfgewfgwegrhgol',0, 'rafael@gmail.com', '$2a$10$alIXffXgTI7nWm.5Nlcnnuhq8EvZOxMGoR8IHK.48iPB/bEXvCae.'),
(9, 'test',0, 'test@test.com', '$2a$10$G6k09m2y3kLkaNRV4K0.POKsZYaYIaEb86VJWGBYtXZ2FOF6iptKW'),
(10, 'rafaell',0, 'rafael@gmail.comm', '$2a$10$ozcBdNwEdS6q2I1NqFdRdeFwPbDKQJHkOce3.f3G3rLjxU82I9nrS'),
(11, 'rafaelll',0, 'rafael@gmail.commmmm', '$2a$10$WtFCu09VzN6Y9B.lhiklCuNFGPiu5CFwXyUtPLWByGfNrsrziyEeK'),
(12, 'rafael_f',0, 'rafael_f@eu.com', '$2a$10$2tp5oXwOTTx9cYw27ztIF.bU/fNDixmLyVqB3Jrfd32AVrHuQgS4G'),
(13, 'PolAlz',1, 'gp99alz@gmail.com', '$2a$10$/LCPJhDs1UZA.mgDezN/8uJL/WU.ISG8b6WziTD5ufH4OchZb9GoS');

--


-- Store TIMES OF TRANSACTION for `metrics`
CREATE TABLE `timeTransaction` (
  `id` int(11) NOT NULL,
  `value` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transactiontme`
--

INSERT INTO `timeTransaction` (`id`, `value`) VALUES
(1,30);




-- Store RESULTS for all `metrics`
CREATE TABLE `metrics` (
  `id` int(11) NOT NULL,
  `metricName` varchar(255) NOT NULL,
  `value` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT   INTO `metrics` (`id`,`metricName`,`value`) VALUES
(1, 'successTransaction',0),
(2, 'failedTransaction',0),
(3, 'noTransaction',0);







ALTER TABLE `metrics`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `metricName` (`metricName`),
  ADD KEY `value` (`value`);

  ALTER TABLE `timeTransaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `value` (`value`);

ALTER TABLE `metrics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
  
  ALTER TABLE `timeTransaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;





-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`);

--
-- Indexes for table `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`idcategory`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `admin` (`admin`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `idcategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category`) REFERENCES `product_categories` (`idcategory`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
