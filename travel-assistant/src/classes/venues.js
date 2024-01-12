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

export function createVenues(location,activity) {
    let venues = []; 
        for (let j =  0; j < 8; j++){
            let id = j;
            let name = activity + " " + (j + 1);
            let text = ["family", "lover", "colleagues", "acquaintances","friends","companions","partner"];
            let description = "It is a lovely " + activity + " located on " + location + ".The perfect place to go with your "+ text[j];
            let price;
            if (activity === "Restaurant") {
                price = (j + 1) * 20;
            } else if (activity === "LocalCulturalEvent") {
                price = (j + 1) * 10;
            } else {
                price = (j + 1) * 15;
            }
            let image = activity + (j + 1) + ".jpg";
            let person = (j % 3) + 1;
            let rating = Math.floor(Math.random() * 5) + 1;
            let venue = new Venue(id, name, description, price, location, image, person, rating);
            venues.push(venue); 
    }
    return venues;
}

