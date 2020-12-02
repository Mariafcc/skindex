const { authJwt } = require("../middleware");
const controller = require("../controllers/quiz.controller");

module.exports = function(app) {
	// app.use(function(req, res, next) {
	// 	res.header(
	// 		"Access-Control-Allow-Headers",
	// 		"x-access-token, Origin, Content-Type, Accept"
	// 	);
	// 	next();
	// });

	// app.get("/api/products", controller.getProducts);
	// app.get("/api/productsAuth", [authJwt.verifyToken], controller.getProducts);
};