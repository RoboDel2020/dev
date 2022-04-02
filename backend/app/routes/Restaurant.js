const express = require('express');
const router = express.Router();

const {Restaurant} = require("../models");
// recieve
router.get("/", async(req, res)=>{
    const listOfRestaurants = await Restaurant.findAll();
    res.json(listOfRestaurants);
});

router.get("/:restaurantId", async (req, res) => {
    const restaurantId = req.params.restaurantId;
    const restaurant = await Restaurant.findAll({ where: { RestaurantID: restaurantId } });
    res.json(restaurant);
});

//update
router.put("/:restaurantId", async (req, res) => {
    const restaurantId = req.params.restaurantId;
    const updaterestaurant = await Restaurant.update(req.body , { where: { RestaurantID: restaurantId } });
    res.json(updaterestaurant);
});

//delete
router.delete("/:restaurantId", async (req, res) => {
    const restaurantId = req.params.restaurantId;
    await Restaurant.destroy({ where: { RestaurantID: restaurantId } }).then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete record with id=${restaurantId}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
    
});
router.delete("/", async (req, res) => {
    
    await Restaurant.destroy({ where: { } }).then(num => {
        res.send({ message: `${nums} Records were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
      });
    
});

// write
router.post("/", async(req, res)=>{
    const restaurant = req.body;
    await Restaurant.create(restaurant);
    res.json(restaurant);

})

module.exports = router;