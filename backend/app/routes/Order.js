module.exports = app => {
  const orders = require("../controllers/order.controller.js");
  var router = require("express").Router();
  // Create a new Restaurant
  router.post("/", orders.create);
  // Retrieve all Restaurants
  router.get("/", orders.findAll);
  // Retrieve all active Restaurants
  router.get("/active", orders.findAllActive);
  // Retrieve a single Restaurant with id
  router.get("/:id", orders.findOne);
  // Update a Restaurant with id
  router.put("/:id", orders.update);
  // Delete a Restaurant with id
  router.delete("/:id", orders.delete);
  // Delete all Restaurants
  router.delete("/", orders.deleteAll);
  app.use('/api/orders', router);
};