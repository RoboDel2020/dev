const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

const PORT = process.env.PORT || 8080;

// force: true will drop the table if it already exists
// set port, listen for requests
db.sequelize.sync().then(() => {
  console.log('Drop and Resync Database with { force: true }');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  // initial();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to RoboDel application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require("./app/routes/turorial.routes")(app);
require("./app/routes/restaurant.routes")(app);
const customerRouter = require('./app/routes/Customer');
app.use("/customer", customerRouter);
const orderRouter = require('./app/routes/Order');
app.use("/order", orderRouter);
const robotRouter = require('./app/routes/Robot');
app.use("/robot", robotRouter);


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}