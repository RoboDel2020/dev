module.exports= (sequelize, DataTypes)=>{

    const Robot = sequelize.define("Robot",{
        RobotID:{
            type: DataTypes.INTEGER,
            allownull : false,
        },
        StateOfRobot:{
            type:DataTypes.STRING,
            allownull:false,
        },


    })

    return Robot;
}