const express = require("express");
const mysql = require("mysql")
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = mysql.createPool({
    host: "localhost",
    user: "3306",
    password: "",
    database: "userinputdb"
})

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
    const sqlInsert = 
    "INSERT INTO userProducts (productName, productType) VALUES ('test', 'test');";
    db.query(sqlInsert, (err, result) => {
        res.send("hi maria");
    })
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});