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

// module.exports = {
// 	HOST: "de1tmi3t63foh7fa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
// 	USER: "hro7a2y297vy6173",
// 	PASSWORD: "dqnqx1b2fgkkw2s6",
// 	DB: "pcl2pvbuikbgjtk4",
// 	dialect: "mysql",
// 	pool: {
// 		max: 5,
// 		min: 0,
// 		acquire: 30000,
// 		idle: 10000
// 	}
// };
