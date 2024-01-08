class Accommodation {
    constructor(id, name, description, price, location, image, person, rating) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.location = location;
        this.image = image;
        this.person = person;
        this.rating = rating;
    }

    get getId() {
        return this.id;
    }

    get getName() {
        return this.name;
    }

    get getDescription() {
        return this.description;
    }

    get getPrice() {
        return this.price;
    }

    get getLocation() {
        return this.location;
    }

    get getImage() {
        return this.image;
    }

    get getPerson() {
        return this.person;
    }

    get getRating() {
        return this.rating;
    }
}

export function createAccommodations() {
    return [
        new Accommodation(1, "Hotel 1", "Hotel 1 description", 100, "Cluj-Napoca", "hotel1.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(2, "Hotel 2", "Hotel 2 description", 200, "Cluj-Napoca", "hotel2.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(3, "Hotel 3", "Hotel 3 description", 300, "Cluj-Napoca", "hotel3.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(4, "Hotel 4", "Hotel 4 description", 400, "Cluj-Napoca", "hotel4.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(5, "Hotel 5", "Hotel 5 description", 500, "Cluj-Napoca", "hotel5.jpg", 5, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(6, "Hotel 6", "Hotel 6 description", 600, "Cluj-Napoca", "hotel6.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(7, "Hotel 7", "Hotel 7 description", 700, "Cluj-Napoca", "hotel7.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(8, "Hotel 8", "Hotel 8 description", 800, "Cluj-Napoca", "hotel8.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(9, "Hotel 9", "Hotel 9 description", 900, "Cluj-Napoca", "hotel9.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(10, "Hotel 10", "Hotel 10 description", 1000, "Cluj-Napoca", "hotel10.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(11, "Hotel 1", "Hotel 1 description", 1100, "Alicante", "hotel1.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(12, "Hotel 2", "Hotel 2 description", 1200, "Alicante", "hotel2.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(13, "Hotel 3", "Hotel 3 description", 1300, "Alicante", "hotel3.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(14, "Hotel 4", "Hotel 4 description", 1400, "Alicante", "hotel4.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(15, "Hotel 5", "Hotel 5 description", 1500, "Alicante", "hotel5.jpg", 5, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(16, "Hotel 6", "Hotel 6 description", 1600, "Alicante", "hotel6.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(17, "Hotel 7", "Hotel 7 description", 1700, "Alicante", "hotel7.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(18, "Hotel 8", "Hotel 8 description", 1800, "Alicante", "hotel8.jpg", 3,  (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(19, "Hotel 9", "Hotel 9 description", 1900, "Alicante", "hotel9.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(20, "Hotel 10", "Hotel 10 description", 2000, "Alicante", "hotel10.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(21, "Hotel 1", "Hotel 1 description", 2100, "Bucharest", "hotel1.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(22, "Hotel 2", "Hotel 2 description", 2200, "Bucharest", "hotel2.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(23, "Hotel 3", "Hotel 3 description", 2300, "Bucharest", "hotel3.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(24, "Hotel 4", "Hotel 4 description", 2400, "Bucharest", "hotel4.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(25, "Hotel 5", "Hotel 5 description", 2500, "Bucharest", "hotel5.jpg", 5, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(26, "Hotel 6", "Hotel 6 description", 2600, "Bucharest", "hotel6.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(27, "Hotel 7", "Hotel 7 description", 2700, "Bucharest", "hotel7.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(28, "Hotel 8", "Hotel 8 description", 2800, "Bucharest", "hotel8.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(29, "Hotel 9", "Hotel 9 description", 2900, "Bucharest", "hotel9.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(30, "Hotel 10", "Hotel 10 description", 3000, "Bucharest", "hotel10.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(31, "Hotel 1", "Hotel 1 description", 3100, "Budapest", "hotel1.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(32, "Hotel 2", "Hotel 2 description", 3200, "Budapest", "hotel2.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(33, "Hotel 3", "Hotel 3 description", 3300, "Budapest", "hotel3.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(34, "Hotel 4", "Hotel 4 description", 3400, "Budapest", "hotel4.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(35, "Hotel 5", "Hotel 5 description", 3500, "Budapest", "hotel5.jpg", 5, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(36, "Hotel 6", "Hotel 6 description", 3600, "Budapest", "hotel6.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(37, "Hotel 7", "Hotel 7 description", 3700, "Budapest", "hotel7.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(38, "Hotel 8", "Hotel 8 description", 3800, "Budapest", "hotel8.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(39, "Hotel 9", "Hotel 9 description", 3900, "Budapest", "hotel9.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(40, "Hotel 10", "Hotel 10 description", 4000, "Budapest", "hotel10.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(41, "Hotel 1", "Hotel 1 description", 4100, "Istanbul", "hotel1.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(42, "Hotel 2", "Hotel 2 description", 4200, "Istanbul", "hotel2.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(43, "Hotel 3", "Hotel 3 description", 4300, "Istanbul", "hotel3.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(44, "Hotel 4", "Hotel 4 description", 4400, "Istanbul", "hotel4.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(45, "Hotel 5", "Hotel 5 description", 4500, "Istanbul", "hotel5.jpg", 5, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(46, "Hotel 6", "Hotel 6 description", 4600, "Istanbul", "hotel6.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(47, "Hotel 7", "Hotel 7 description", 4700, "Istanbul", "hotel7.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(48, "Hotel 8", "Hotel 8 description", 4800, "Istanbul", "hotel8.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(49, "Hotel 9", "Hotel 9 description", 4900, "Istanbul", "hotel9.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(50, "Hotel 10", "Hotel 10 description", 5000, "Istanbul", "hotel10.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(51, "Hotel 1", "Hotel 1 description", 5100, "London", "hotel1.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(52, "Hotel 2", "Hotel 2 description", 5200, "London", "hotel2.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(53, "Hotel 3", "Hotel 3 description", 5300, "London", "hotel3.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(54, "Hotel 4", "Hotel 4 description", 5400, "London", "hotel4.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(55, "Hotel 5", "Hotel 5 description", 5500, "London", "hotel5.jpg", 5, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(56, "Hotel 6", "Hotel 6 description", 5600, "London", "hotel6.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(57, "Hotel 7", "Hotel 7 description", 5700, "London", "hotel7.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(58, "Hotel 8", "Hotel 8 description", 5800, "London", "hotel8.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(59, "Hotel 9", "Hotel 9 description", 5900, "London", "hotel9.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(60, "Hotel 10", "Hotel 10 description", 6000, "London", "hotel10.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(61, "Hotel 1", "Hotel 1 description", 6100, "Madrid", "hotel1.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(62, "Hotel 2", "Hotel 2 description", 6200, "Madrid", "hotel2.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(63, "Hotel 3", "Hotel 3 description", 6300, "Madrid", "hotel3.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(64, "Hotel 4", "Hotel 4 description", 6400, "Madrid", "hotel4.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(65, "Hotel 5", "Hotel 5 description", 6500, "Madrid", "hotel5.jpg", 5, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(66, "Hotel 6", "Hotel 6 description", 6600, "Madrid", "hotel6.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(67, "Hotel 7", "Hotel 7 description", 6700, "Madrid", "hotel7.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(68, "Hotel 8", "Hotel 8 description", 6800, "Madrid", "hotel8.jpg", 3,   (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(69, "Hotel 9", "Hotel 9 description", 6900, "Madrid", "hotel9.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(70, "Hotel 10", "Hotel 10 description", 7000, "Madrid", "hotel10.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(71, "Hotel 1", "Hotel 1 description", 7100, "Paris", "hotel1.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(72, "Hotel 2", "Hotel 2 description", 7200, "Paris", "hotel2.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(73, "Hotel 3", "Hotel 3 description", 7300, "Paris", "hotel3.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(74, "Hotel 4", "Hotel 4 description", 7400, "Paris", "hotel4.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(75, "Hotel 5", "Hotel 5 description", 7500, "Paris", "hotel5.jpg", 5, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(76, "Hotel 6", "Hotel 6 description", 7600, "Paris", "hotel6.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(77, "Hotel 7", "Hotel 7 description", 7700, "Paris", "hotel7.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(78, "Hotel 8", "Hotel 8 description", 7800, "Paris", "hotel8.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(79, "Hotel 9", "Hotel 9 description", 7900, "Paris", "hotel9.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(80, "Hotel 10", "Hotel 10 description", 8000, "Paris", "hotel10.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(81, "Hotel 1", "Hotel 1 description", 8100, "Rome", "hotel1.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(82, "Hotel 2", "Hotel 2 description", 8200, "Rome", "hotel2.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(83, "Hotel 3", "Hotel 3 description", 8300, "Rome", "hotel3.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(84, "Hotel 4", "Hotel 4 description", 8400, "Rome", "hotel4.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(85, "Hotel 5", "Hotel 5 description", 8500, "Rome", "hotel5.jpg", 5, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(86, "Hotel 6", "Hotel 6 description", 8600, "Rome", "hotel6.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(87, "Hotel 7", "Hotel 7 description", 8700, "Rome", "hotel7.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(88, "Hotel 8", "Hotel 8 description", 8800, "Rome", "hotel8.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(89, "Hotel 9", "Hotel 9 description", 8900, "Rome", "hotel9.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(90, "Hotel 10", "Hotel 10 description", 9000, "Rome", "hotel10.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(91, "Hotel 1", "Hotel 1 description", 9100, "Vienna", "hotel1.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(92, "Hotel 2", "Hotel 2 description", 9200, "Vienna", "hotel2.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(93, "Hotel 3", "Hotel 3 description", 9300, "Vienna", "hotel3.jpg", 3, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(94, "Hotel 4", "Hotel 4 description", 9400, "Vienna", "hotel4.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(95, "Hotel 5", "Hotel 5 description", 9500, "Vienna", "hotel5.jpg", 5, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(96, "Hotel 6", "Hotel 6 description", 9600, "Vienna", "hotel6.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(97, "Hotel 7", "Hotel 7 description", 9700, "Vienna", "hotel7.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(98, "Hotel 8", "Hotel 8 description", 9800, "Vienna", "hotel8.jpg", 3,   (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(99, "Hotel 9", "Hotel 9 description", 9900, "Vienna", "hotel9.jpg", 4, (Math.random() * 4).toFixed(1) + 1),
        new Accommodation(100, "Hotel 10", "Hotel 10 description", 10000, "Vienna", "hotel10.jpg", 2, (Math.random() * 4).toFixed(1) + 1),
    ];
}