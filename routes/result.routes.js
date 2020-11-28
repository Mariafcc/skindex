const { authJwt } = require("../middleware");
const controller = require("../controllers/result.controller");

module.exports = function(app) {
	app.use(function(req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.post("/api/result", [authJwt.verifyToken], controller.saveResult);
};