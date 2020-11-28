module.exports = (sequelize, Sequelize) => {
    const Result = sequelize.define("results", {
        question_id: {
            type: Sequelize.INTEGER,
        },
        question: {
            type: Sequelize.STRING
        },
        answer: {
            type: Sequelize.STRING
        },
    });

    return Result;
};

