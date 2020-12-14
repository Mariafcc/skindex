const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");


//run initially
// const seeds = require("./seeds");
// db.sequelize.sync({ force: true }).then(() => {
//     console.log('Drop and Resync Db');
//     seeds.productSeeds();
// });

//comment out initially
db.sequelize.sync();


require('./routes/auth.routes')(app);
require('./routes/product.routes')(app);
require('./routes/result.routes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'client/build/index.html'));
    })
} else {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/public/index.html'));
    });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


