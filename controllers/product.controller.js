const db = require("../models");
const Op = db.Sequelize.Op;
const Product = db.product;
const Result = db.result

exports.getProducts = (req, res) => {
    Product.findAll({
        attributes: ['id', 'brand', 'name']
    })
        .then(products => {
            res.status(200).send({
                products
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.findAllSkinType = (req, res) => {
    Result.findAll({
        where: {
            userId: req.userId
        }
    })
        .then((answers) => {
            const skinType = answers.find(x => x.question_id == 1);
            const goal = answers.find(x => x.question_id == 2);
            const price = answers.find(x => x.question_id == 3);
            
            console.log(skinType);
            Product.findAll({
                where: {
                    skinType: {
                        [Op.in]: [skinType.answer, 'all']
                    },
                    goal: goal.answer,
                    price: price.answer
                }
            })
                .then(products => {
                    res.status(200).send({
                        products
                    });
                })
                .catch(err => {
                    res.status(500).send({ message: err.message });
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


*/
