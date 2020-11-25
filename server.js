const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./API/models");


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// set port, listen for requests
const PORT = process.env.PORT || 8080;
db.sequelize.sync({ truncate: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});





