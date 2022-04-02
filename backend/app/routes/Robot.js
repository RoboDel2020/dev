const express = require('express');
const router = express.Router();

const {Robot} = require("../models");

router.get("/", async(req, res)=>{
    const listOfRobots = await Robot.findAll();
    res.json(listOfRobots);
});

router.get("/:robotId", async (req, res) => {
    const robotId = req.params.robotId;
    const robot = await Robot.findAll({ where: { RobotID: robotId } });
    res.json(robot);
});
//update
router.put("/:robotId", async (req, res) => {
    const robotId = req.params.robotId;
    const updaterobot = await Robot.update(req.body , { where: { RobotID: robotId } });
    res.json(updaterobot);
});

//delete
router.delete("/:robotId", async (req, res) => {
    const robotId = req.params.robotId;
    await Robot.destroy({ where: { robotId: robotId } }).then(num => {
        if (num == 1) {
          res.send({
            message: "Record was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete record with id=${robotId}. Maybe record was not found!`
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
    
    await Robot.destroy({ where: { } }).then(num => {
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
    const robot = req.body;
    await Robot.create(robot);
    res.json(robot);

})

module.exports = router;