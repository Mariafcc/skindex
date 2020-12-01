const db = require("../models");
<<<<<<< HEAD
//const Tutorial = db.tutorials;
=======
>>>>>>> 99520f8160172e6280c05db847f6c6dfd438aad0
const Op = db.Sequelize.Op;
const Results = db.results;


<<<<<<< HEAD
exports.getResultss = (req, res) => {
=======
exports.getResults = (req, res) => {
>>>>>>> 99520f8160172e6280c05db847f6c6dfd438aad0
    Results.findAll()
    .then(results => {
        res.status(200).send({
            results
        });
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};