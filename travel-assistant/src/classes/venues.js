class Venue {
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

export function createVenues(activity) {
    let venues = [];
    const destinationsList = ["Cluj-Napoca", "Alicante", "Bucharest", "Budapest", "Istanbul", "London", "Madrid", "Paris", "Rome", "Vienna"];
    if (activity === "Restaurant" || activity === "LocalCulturalEvent" || activity === "Meeting") {
    
    for (let i = 0; i < destinationsList.length; i++) {
        for (let j =  0; j < 8; j++)
        {
            let id = i * 10 + j;
            let name = activity + " " + (j + 1);
            let description = name + " description";
            let price = (j + 1) * 100;
            let location = destinationsList[i];
            let image = activity + (j + 1) + ".jpg";
            let person = (j % 4) + 1;
            let rating = (j % 5);
            let venue = new Venue(id, name, description, price, location, image, person, rating);
            venues.push(venue);
        }
    }
}
    return venues;
}

