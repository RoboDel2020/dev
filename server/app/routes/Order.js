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

router.get("/:orderStatus", async (req, res) =>{
    const orderStatus = req.params.orderStatus;
    const status = await Order.findAll({where:{ OrderStatus: orderStatus}});
    res.json(status);
});
router.post("/", async(req, res)=>{
    const order = req.body;
    await Order.create(order);
    res.json(order);

})

module.exports = router;