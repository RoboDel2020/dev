const express = require('express');
const router = express.Router();

const {Restaurant} = require("../models");

router.get("/", async(req, res)=>{
    const listOfRestaurants = await Restaurant.findAll();
    res.json(listOfRestaurants);
});

router.get("/:restaurantId", async (req, res) => {
    const restaurantId = req.params.restaurantId;
    const restaurant = await Restaurant.findAll({ where: { RestaurantID: restaurantId } });
    res.json(restaurant);
});

router.post("/", async(req, res)=>{
    const restaurant = req.body;
    await Restaurant.create(restaurant);
    res.json(restaurant);

})

module.exports = router;