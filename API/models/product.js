module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        brand: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        store: {
            type: Sequelize.STRING
        },
        skinType: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.STRING
        },
        goal: {
            type: Sequelize.STRING

        },
        order: {
            type: DataTypes.INTEGER

        }
    });

    return Product;
};
