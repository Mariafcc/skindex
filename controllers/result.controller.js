const db = require("../models");
const Op = db.Sequelize.Op;
const Result = db.result;


exports.saveResult = (req, res) => {
    if (!req.body.id){
        res.status(422).send({ message: "Invalid or blank question id" });
		return;
    }

    if (!req.body.question){
        res.status(422).send({ message: "Invalid or blank question" });
		return;
    }

    if (!req.body.answer){
        res.status(422).send({ message: "Invalid or blank answer" });
		return;
    }

    Result.create({
        question_id: req.body.id,
        question: req.body.question,
        answer: req.body.answer,
        userId: req.userId
    })
    .then(result => {
        res.status(200).send({message: "Question Saved"});
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};