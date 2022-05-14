module.exports= (sequelize, DataTypes)=>{

    const Order = sequelize.define("Order", {
        
        CustomerID:{
            type: DataTypes.INTEGER.UNSIGNED,
            allownull : false,
        },
        name:{
            type: DataTypes.STRING,
            allownull : false,
            primaryKey : true,
        },
        DeliveryID : {
            type: DataTypes.INTEGER,
            allownull: true,
        },
        OrderDateTime:{
            type: DataTypes.DATE,
            allownull:false,
        },
        OrderStatus:{
            type: DataTypes.STRING,
            allownull: false,
            
        },
        longitude:{
            type: DataTypes.DECIMAL(10,6),
            allownull: true,
            
        },
        latitude:{
            type: DataTypes.DECIMAL(10,6),
            allownull: true,
        }


    });
    
    return Order;
};