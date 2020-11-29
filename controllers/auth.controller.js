const db = require("../models");
const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = db.user;

exports.signup = (req, res) => {
	console.log(req.body);

	if (!req.body.username){
		res.status(422).send({ message: "Invalid or blank username" });
		return;
	}

	if (!req.body.email){
		res.status(422).send({ message: "Invalid or blank email address" });
		return;
	}

	if (!req.body.password){
		res.status(422).send({ message: "Invalid or blank password" });
		return;
	}

	// Save User to Database
	User.create({
			username: req.body.username,
			email: req.body.email,
			password: bcrypt.hashSync(req.body.password, 8)
		})
		.then(user => {
			res.send({ message: "User was registered successfully!" });
		})
		.catch(err => {
			res.status(500).send({ message: err.message });
		});
};

exports.signin = (req, res) => {
	if (!req.body.email){
		res.status(422).send({ message: "Invalid or blank email" });
		return;
	}

	if (!req.body.password){
		res.status(422).send({ message: "Invalid or blank password" });
		return;
	}

	User.findOne({
			where: {
				email: req.body.email
			}
		})
		.then(user => {
			if (!user) {
				return res.status(404).send({ message: "User Not found." });
			}

			const passwordIsValid = bcrypt.compareSync(
				req.body.password,
				user.password
			);

			if (!passwordIsValid) {
				return res.status(401).send({
					accessToken: null,
					message: "Invalid Password!"
				});
			}

			const token = jwt.sign({ id: user.id }, config.secret, {
				expiresIn: 86400 // 24 hours
			});

			res.status(200).send({
				id: user.id,
				username: user.username,
				email: user.email,
				accessToken: token
			});
		})
		.catch(err => {
			res.status(500).send({ message: err.message });
		});
};
