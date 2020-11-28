const config = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	config.DB,
	config.USER,
	config.PASSWORD,
	{
		host: config.HOST,
		dialect: config.dialect,
		operatorsAliases: false,

		pool: {
			max: config.pool.max,
			min: config.pool.min,
			acquire: config.pool.acquire,
			idle: config.pool.idle
		}
	}
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.product = require("./product.model")(sequelize, Sequelize);

db.result = require("./result.model")(sequelize, Sequelize);

db.user.hasMany(db.result, {foreignKey: 'userId'});


module.exports = db;




