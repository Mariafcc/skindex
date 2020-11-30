const db = require("../models");
//const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;
const Results = db.results;


exports.getResultss = (req, res) => {
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