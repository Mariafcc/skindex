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

exports.findAllSkinType = async (req, res) => {


    Result.findAll({
        where: {
            userId: req.userId
        }
    })
        .then( async (answers) => {
            const skinType = answers.find(x => x.question_id == 1);
            const goal = answers.find(x => x.question_id == 2);
            const price = answers.find(x => x.question_id == 3);
            const amountAnswer = answers.find(x => x.question_id == 4);

            const amount = parseInt(amountAnswer.answer)
            console.log(skinType);

            const products = {};

            const cleansers = await Product.findAll({
                where: {
                    skinType: {
                        [Op.in]: [skinType.answer, 'all']
                    },
                    goal: goal.answer,
                    price: price.answer,
                    type:"cleanser"
                }

            });
            //randomizing selection if more than one product shows for the category.
            products.cleanser = cleansers[Math.floor(Math.random() * cleansers.length)];


            const moisturizers = await Product.findAll({
                where: {
                    skinType: {
                        [Op.in]: [skinType.answer, 'all']
                    },
                    goal: goal.answer,
                    price: price.answer,
                    type:"moisturizer"
                }
            });

            products.moisturizer = moisturizers[Math.floor(Math.random() * moisturizers.length)];

            const spfs = await Product.findAll({
                where: {
                    skinType: {
                        [Op.in]: [skinType.answer, 'all']
                    },
                    goal: goal.answer,
                    price: price.answer,
                    type:"spf"
                }
            });

            products.spf = spfs[Math.floor(Math.random() * spfs.length)];

            if (amount >= 4){

            }

            if (amount >= 8){
                products.mask = await Product.findAll({
                    where: {
                        skinType: {
                            [Op.in]: [skinType.answer, 'all']
                        },
                        goal: goal.answer,
                        price: price.answer,
                        type:"mask"
                    }
                });

                products.mask = masks[Math.floor(Math.random() * masks.length)];
            }


            if (amount == 9){
                products.mask = await Product.findOne({
                    where: {
                        skinType: {
                            [Op.in]: [skinType.answer, 'all']
                        },
                        goal: goal.answer,
                        price: price.answer,
                        type:"mask"
                    }
                });
            }

            res.status(200).send({
                products
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};