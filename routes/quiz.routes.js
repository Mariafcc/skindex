const { authJwt } = require("../middleware");
const controller = require("../controllers/quiz.controller");

module.exports = function(app) {
<<<<<<< HEAD
	// app.use(function(req, res, next) {
	// 	res.header(
	// 		"Access-Control-Allow-Headers",
	// 		"x-access-token, Origin, Content-Type, Accept"
	// 	);
	// 	next();
	// });

	// app.get("/api/products", controller.getProducts);
	// app.get("/api/productsAuth", [authJwt.verifyToken], controller.getProducts);
=======
	app.use(function(req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	//app.get("/api/products", controller.getProducts);
	//app.get("/api/productsAuth", [authJwt.verifyToken], controller.getProducts);
>>>>>>> 99520f8160172e6280c05db847f6c6dfd438aad0
};