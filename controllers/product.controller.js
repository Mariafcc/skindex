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

            if (amount >= 5){
                const serums = await Product.findAll({
                    where: {
                        skinType: {
                            [Op.in]: [skinType.answer, 'all']
                        },
                        goal: goal.answer,
                        price: price.answer,
                        type:"serum"
                        
                    }
                });

                products.serum = serums[Math.floor(Math.random() * serums.length)];

                const toners = await Product.findAll({
                    where: {
                        skinType: {
                            [Op.in]: [skinType.answer, 'all']
                        },
                        goal: goal.answer,
                        price: price.answer,
                        type:"toner"
                        
                    }
                });

                products.toner = toners[Math.floor(Math.random() * toners.length)];
            }


            if (amount == 9){
                const essences = await Product.findAll({
                    where: {
                        skinType: {
                            [Op.in]: [skinType.answer, 'all']
                        },
                        goal: goal.answer,
                        price: price.answer,
                        type:"essence"
                    }

                });

                products.essence = essences[Math.floor(Math.random() * essences.length)];

                const exfoliators = await Product.findAll({
                    where: {
                        skinType: {
                            [Op.in]: [skinType.answer, 'all']
                        },
                        goal: goal.answer,
                        price: price.answer,
                        type:"exfoliator"
                        
                    }
                });

                products.exfoliator = exfoliators[Math.floor(Math.random() * exfoliators.length)];

                const masks = await Product.findAll({
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

                const eyes = await Product.findAll({
                    where: {
                        skinType: {
                            [Op.in]: [skinType.answer, 'all']
                        },
                        goal: goal.answer,
                        price: price.answer,
                        type:"eye cream"
      
                    }

                });

                products.eye = eyes[Math.floor(Math.random() * eyes.length)];
            }
            

            res.status(200).send({
                products
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};