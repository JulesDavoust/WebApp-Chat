module.exports = {
    HOST: "172.31.39.128",
    USER: "Admin",
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