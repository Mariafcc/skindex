module.exports = (sequelize, Sequelize) => {
    const Results = sequelize.define("results", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        question: {
            type: Sequelize.STRING
        },
        answers: {
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
            type: Sequelize.INTEGER

        }
    });

    return Results;
};