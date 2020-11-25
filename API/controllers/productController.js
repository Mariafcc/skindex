const db = require("../models");
const { products } = require("../models");
const { Profiler } = require("react");
const Product = db.products;
const Op = db.Sequelize.Op;

module.exports = (app) => {
    app.get("/api/productlist", (req, res) => {
        db.Product.findAll({
            where: {
                [Op.or]: [
                    { id: req.query.id }

                ]
            }
        }).then((products) => {
            res.json(products)
        })
    })

}
