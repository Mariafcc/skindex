module.exports = {
	HOST: "localhost",
	USER: "maria",
	PASSWORD: "maria",
	DB: "productlist",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
};
