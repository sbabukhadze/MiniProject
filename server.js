const express = require("express");
const path = require("path");
const app = express();

// const CarController = require('./routes/CarController');
// const PersonController = require('./routes/PersonController');


const PORT = process.env.PORT || 3000;



app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static( path.join(__dirname, "public") )  );
app.use(express.urlencoded({ extended: true } ) );


// app.use('/cars', CarRoutes.router);
// app.use('/persons', PersonRoutes.router);



app.get('/', (req, res) => {
    res.render('index', { title: "Welcome" }); 
    console.log("welcome")
});




app.listen(PORT, ()=> {
    console.log(`Server Port - ${PORT}`);
})

