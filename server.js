const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
app.use(express.static('client/public'));

//heroku run if we add this the routine does not display 
// app.get('*', (req, res) => { 
//      res.sendfile(path.join(__dirname = 'client/public/index.html'));
// })

//run initially
// const seeds = require("./seeds");
// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and Resync Db');
//     seeds.productSeeds();
// });

//comment out initially
db.sequelize.sync();

// load in routes
fs.readdir('./routes', (err, files) => {
	files.forEach((file) => {
		const routeFile = `./routes/${file}`;
		require(routeFile)  (app);
	});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
