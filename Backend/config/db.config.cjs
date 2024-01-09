module.exports = {
    HOST: "10.0.1.5",
    USER: "Jules",
    PASSWORD: "Admin75017!",
    DB: "web-project-s7",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};