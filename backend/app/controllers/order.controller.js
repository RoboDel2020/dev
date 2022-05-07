const db = require("../models");
const Orders = db.Order;
const Op = db.Sequelize.Op;
// Create and Save a new Restaurant
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    if (!req.body.address) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }if (!req.body.city) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    if (!req.body.country) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Restaurant
    const order = {
      CustomerID: req.body.customerid,
      RestaurantID: req.body.restaurantid,
      DeliveryID: req.body.deliveryid,
      OrderDateTime: req.body.OrderDateTime,
      OrderStatus: req.body.OrderStatus,
      longitude: req.body.longitude,
      latitude: req.body.latitude,
      active: req.body.active ? req.body.active : true
    };
    // Save Restaurant in the database
    Orders.create(order)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the order."
        });
      });
  };
// Retrieve all Restaurants from the database.
exports.findAll = (req, res) => {
    const customerid = req.query.customerid;
    var condition = customerid ? { CustomerID: { [Op.like]: `%${customerid}%` } } : null;
    Orders.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving orders."
        });
      });
  };
// Find a single Restaurant with an id
exports.findOne = (req, res) => {
    const id = req.params.orderid;
    Restaurant.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find order with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving order with id=" + id
        });
      });
  };
// Update a Restaurant by the id in the request
exports.update = (req, res) => {
    const id = req.params.orderid;
    Restaurant.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Order was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Order with id=${id}. Maybe Order was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Order with id=" + id
        });
      });
  };
// Delete a Restaurant with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.orderid;
    Restaurant.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Order was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Order with id=${id}. Maybe Order was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Order with id=" + id
        });
      });
  };
// Delete all Restaurants from the database.
exports.deleteAll = (req, res) => {
    Restaurant.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Order were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Orders."
        });
      });
  };
// Find all active Restaurants
exports.findAllActive = (req, res) => {
    Orders.findAll({ where: { active: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving restaurants."
        });
      });
  };