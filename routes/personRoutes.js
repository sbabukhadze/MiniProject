
const express = require('express');

const Router = require('express').Router;
const Person = require('../database/Person');

const router = Router();

let personDB = [
    { first_name: 'Ana', last_name: 'Jobava', personal_no: '12345678911', mid_name: 'Davit', birth_date: '22/09/1988' },
    { first_name: 'Levan', last_name: 'Kvaratskhelia', personal_no: '12345678912', mid_name: 'Akaki', birth_date: '12/09/1982' },
    { first_name: 'Nika', last_name: 'Kapanadze', personal_no: '12345678910', mid_name: 'Giorgi', birth_date: '10/10/1987' }
]



router.get("/new", (req, res) => {
    res.render("person/addP", { title: "Add a Person", added: false, personDB });

})


router.post("/new", (req, res) => {
    const person = new Person(
        req.body.first_name,
        req.body.last_name,
        req.body.personal_no,
        req.body.mid_name,
        req.body.birth_date,

    );
    personDB.push(person);
    res.render("person/addP", { title: "title", added: true, personDB });

})



router.patch('/', (req, res) => {

});


router.put('/:ID', (req, res) => {

    person.update(
        req.body.first_name,
        req.body.last_name,
        req.body.personal_no,
        req.body.mid_name,
        req.body.birth_date,
    );
    
});


module.exports.router = router;



