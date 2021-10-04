const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodejs_backend_demo", "user", "Password@123", {
  host: "localhost",
  logging: false,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const auth = sequelize.authenticate();
auth
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = sequelize;

// ywuasnaxqaot6hyiz5bx6uk2yg6sqkt2qgbnjcj57vxra3otjxeq

// montfort.thomas@htcindia.com