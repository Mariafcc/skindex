const db = require("../models/index");
const Product = db.product;

const InitializeProducts = () => {
    Product.create({
        "id": 1,
        "name": "Superfood Antioxidant Cleanser",
        "brand": "Youth to the people",
        "type": "cleanser",
        "store": "sephora",
        "skinType": "all",
        "price": "$$",
        "goal": "elasticity",
        "order": 1
      });

    Product.create({
        "id": 2,
        "name": "Soy Face Wash",
        "brand": "Fresh",
        "type": "cleanser",
        "store": "sephora",
        "skinType": "all",
        "price": "$$",
        "goal": "elasticity",
        "order": 1
      });
}

module.exports = InitializeProducts;