
const Router = require('express').Router;
const Car = require('../database/car');
// const person = require('./PersonRoutes');

const router = Router();


let carDB = [
    { car_maker: 'BMW', model: 'M5', plate_number: 'LI555KE', vin: '2654546', color: 'Red', owner_id: 1 },
    { car_maker: 'Opel', model: 'Corsa', plate_number: 'AA222AA', vin: '445465456', color: 'Blue', owner_id: 2 },
    { car_maker: 'Mitsubishi', model: 'Pajero', plate_number: 'XX777AA', vin: '2131213', color: 'Bronze', owner_id: 3 }

]


router.get("/new", (req, res) => {
    res.render("car/addC", { title: "Add a Car ", added: false, carDB });

})

router.post("/new", (req, res) => {
    const car = new Car(
        req.body.car_maker,
        req.body.model,
        req.body.plate_number,
        req.body.VIN,
        req.body.color,
        req.body.owner_id,
    );
    carDB.push(car);
    res.render("car/addC", { title: "title", added: true, carDB });

})


router.patch('/new/edit', (req, res) => {

});

router.put('/new/edit', (req, res) => {

    car.update(
        req.body.car_maker,
        req.body.model,
        req.body.plate_number,
        req.body.VIN,
        req.body.color,
        req.body.owner_id,
    );
    
});


module.exports.router = router;
