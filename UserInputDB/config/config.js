module.exports = {
    HOST: "localhost",
    USER: "3306",
    PASSWORD: "",
    DB: "userinputdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};