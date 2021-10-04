const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const app = express();
const helmet = require("helmet");
const producer = require("./library/producer")

// app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(cors());
app.use(helmet());

app.use(producer())


// creating tables use of sequelize 
const sequelize = require('./config/db');
sequelize.sync();

const user_route = require("./route/user_route");
app.use("/user_details", user_route);


// Main route
app.get("/", (req, res) => {
  res.send("Welcome to nodejs application!");
});

app.get("/healthz", (req, res) => {
  res.send({
    statusCode: 200,
    message: "Running state"
  });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

