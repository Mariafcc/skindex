const db = require("../models");
//const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;
const Product = db.product;


exports.getProducts = (req, res) => {
    Product.findAll()
    .then(products => {
        res.status(200).send({
            products
        });
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};

/*
// Create and Save a new Tutorial
exports.create = (req, res) => {

};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};
*/
