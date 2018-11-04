class Car {
    constructor(car_maker, model, plate_number, VIN, color, owner) {
        this.carmaker = car_maker;
        this.model = model;
        this.platenumber = plate_number;
        this.vin = VIN;
        this.color = color
        this.owner = owner;
    }
}


let CarDb = [
    new Car('BMW', 'M5', 'LI555KE', '2654546', 'Red', 1),
    new Car('Opel', 'Corsa', 'AA222AA', '445465456', 'Blue', 2),
    new Car('Mitsubishi', 'Pajero', 'XX777AA', '2131213', 'Bronze', 3)
];




module.exports = CarDb;
module.exports = Car;