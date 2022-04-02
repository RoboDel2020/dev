const express = require('express');
const router = express.Router();

const {Order} = require("../models");

router.get("/", async(req, res)=>{
    const listOfOrders = await Order.findAll({where :{ OrderStatus: "active"}});
    res.json(listOfOrders);
});

router.get("/:orderId", async (req, res) => {
    const orderId = req.params.orderId;
    const order = await Order.findAll({ where: { OrderID: orderId } });
    res.json(order);
});


//update
router.put("/:orderId", async (req, res) => {
    const orderId = req.params.orderId;
    const updateorder = await Restaurant.update(req.body , { where: { OrderID: orderId } });
    res.json(updateorder);
});

//delete
router.delete("/:orderId", async (req, res) => {
    const orderId = req.params.orderId;
    await Order.destroy({ where: { OrderID: orderId } }).then(num => {
        if (num == 1) {
          res.send({
            message: "Record was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete record with id=${orderId}. Maybe record was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete record with id=" + id
        });
      });
    
});
router.delete("/", async (req, res) => {
    
    await Order.destroy({ where: { } }).then(num => {
        res.send({ message: `${nums} Records were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
      });
    
});
router.post("/", async(req, res)=>{
    const order = req.body;
    await Order.create(order);
    res.json(order);

})

module.exports = router;