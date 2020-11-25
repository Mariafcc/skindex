module.exports = (sequelize, Sequelize) => {
    const UserInput = sequelize.define("userInput", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,

        },
        productName: {
            type: Sequelize.STRING
        },
        productType: {
            type: Sequelize.STRING
        }
    });

    return UserInput;
};
