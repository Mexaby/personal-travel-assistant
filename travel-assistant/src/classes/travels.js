class Travel {
    constructor(id, company, description,arrivalTime, departureTime, duration, location, destination, price, image, person, date, transport) {
        this.id = id;
        this.company = company;
        this.description = description;
        this.arrivalTime = arrivalTime;
        this.departureTime = departureTime;
        this.price = price;
        this.location = location;
        this.destination = destination;
        this.duration =duration;
        this.image = image;
        this.person = person;
        this.date = date;
        this.transport = transport;
    }

    get getId() {
        return this.id;
    }

    get getCompany() {
        return this.company;
    }

    get getDescription() {
        return this.description;
    }

    get getArrivalTime() {
        return this.arrivalTime;
    }

    get getDepartureTime() {
        return this.departureTime;
    }

    get getLocation() {
        return this.location;
    }

    get getDestination() {
        return this.destination;
    }

    get getPrice() {
        return this.price;
    }

    get getDuration() {
        return this.duration;
    }

    get getImage() {
        return this.image;
    }

    get getPerson() {
        return this.person;
    }

    get getDate() {
        return this.date;
    }

    get getTransport() {
        return this.transport;
    }
}

export function createTravels(from,to, date1, transport1) {
    let travels = [];
            for (let j =  0; j < 10; j++) {
                let id=j;
                let company = "Company " + (j + 1);
                let description = company + " description";
                let price = (j + 1) * 100;
                let location = from;
                let destination = to;
                let date = date1;
                let departureTime = generarHoraAleatoria();
                let arrivalTime= generarHoraMayorQue(departureTime);
                let p = compararHoras(departureTime, arrivalTime);
                let duration = -p;
                let image = "travel" + (j + 1) + ".jpg";
                let person = (j % 4) + 1;
                let transport = transport1;
            let travel = new Travel(id, company, description, arrivalTime, departureTime, duration, location, destination, price, image, person, date, transport);
            travels.push(travel);
           }
  
    return travels;
}

export function createTravelsReturn(to, from, date2, transport2) {
    let travels = [];
            for (let j =  0; j < 10; j++) {
                let id=j;
                let company = "Company " + (j + 1);
                let description = company + " description";
                let price = (j + 1) * 100;
                let location = from;
                let destination = to;
                let date = date2;
                let departureTime = generarHoraAleatoria();
                let arrivalTime= generarHoraMayorQue(departureTime);
                let p = compararHoras(departureTime, arrivalTime);
                let duration = -p;
                let image = "travel" + (j + 1) + ".jpg";
                let person = (j % 4) + 1;
                let transport = transport2;
            let travel = new Travel(id, company, description, arrivalTime, departureTime, duration, location, destination, price, image, person, date, transport);
            travels.push(travel);
           }
  
    return travels;
}

function generarHoraAleatoria() {
    // Generar una hora aleatoria entre 00:00 y 23:59
    const hora = Math.floor(Math.random() * 24);
    const minutos = Math.floor(Math.random() * 60);
  
    // Formatear la hora y los minutos
    const horaFormateada = hora.toString().padStart(2, '0');
    const minutosFormateados = minutos.toString().padStart(2, '0');
  
    return `${horaFormateada}:${minutosFormateados}`;
  }
  
  function generarHoraMayorQue(horaBase) {
    let nuevaHora;
  
    do {
      nuevaHora = generarHoraAleatoria();
    } while (compararHoras(horaBase, nuevaHora) >= 0);
  
    return nuevaHora;
  }
  
  function compararHoras(hora1, hora2) {
    const [hora1Horas, hora1Minutos] = hora1.split(':');
    const [hora2Horas, hora2Minutos] = hora2.split(':');
  
    const diferenciaHoras = parseInt(hora1Horas) - parseInt(hora2Horas);
    const diferenciaMinutos = parseInt(hora1Minutos) - parseInt(hora2Minutos);
  
    if (diferenciaHoras !== 0) {
      return diferenciaHoras;
    } else {
      return diferenciaMinutos;
    }
  }