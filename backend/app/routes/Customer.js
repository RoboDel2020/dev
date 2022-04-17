const express = require('express');
const router = express.Router();

const {Customer} = require("../models");

router.get("/", async(req, res)=>{
    const listOfCustomers = await Customer.findAll();
    res.send(listOfCustomers);
});

router.get("/:customerId", async (req, res) => {
    const customerId = req.params.customerId;
    const customer = await Customer.findAll({ where: { CustomerID: customerId } });
    res.send(customer);
});


//update
router.put("/:customerId", async (req, res) => {
    const customerId = req.params.customerId;
    const updatecustomer = await Customer.update(req.body , { where: { CustomerID: customerId } });
    res.send(updatecustomer);
});

//delete
router.delete("/:customerId", async (req, res) => {
    const customerId = req.params.customerId;
    await Customer.destroy({ where: { CustomerID: customerId } }).then(num => {
        if (num == 1) {
          res.send({
            message: "record was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete record with id=${customerId}. Maybe record was not found!`
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
    
    await Customer.destroy({ where: { } }).then(num => {
        res.send({ message: `${nums} Records were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
      });
    
});
//write
router.post("/", async(req, res)=>{
    const customer = req.body;
    await Customer.create(customer);
    res.send(customer);

})



module.exports = router;