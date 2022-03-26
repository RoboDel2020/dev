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
// router.get("/free", async (req, res) => {
//     const listOfRobots = await Robot.findAll({attributes: ['busy       ']});
//     res.json(listOfRobots);
// });
// router.get("/busy", async (req, res) => {
//     const listOfRobots = await Robot.findAll({where: {StateOfRobot : "busy"}});
//     res.json(listOfRobots);
// });

router.post("/", async(req, res)=>{
    const robot = req.body;
    await Robot.create(robot);
    res.json(robot);

})

module.exports = router;