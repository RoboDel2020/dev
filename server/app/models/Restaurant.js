module.exports = (sequelize, DataTypes)=>{

    const Restaurant = sequelize.define("Restaurant", {

        RestaurantID:{
            type: DataTypes.INTEGER.UNSIGNED,
            allownull : false,
            primaryKey : true,
            autoIncrement: true,
        },
        Name:{
            type: DataTypes.STRING,
            allownull: false,
        },
        Price: {
            type: DataTypes.DECIMAL,
            allownull: true,
        },
        Type: {
            type: DataTypes.STRING,
            allownull: true,
        },
        City: {
            type: DataTypes.STRING, 
            allownull: false,
        },
        State: {
            type: DataTypes.STRING,
            allownull: true,
        },
        Zip: {
            type: DataTypes.STRING,
            allownull: true,
        },
        Country: {
            type: DataTypes.STRING,
            allownull : false,
        },
        Longitude:{
            type: DataTypes.DECIMAL,
            allownull: true,
            
        },
        Latitude:{
            type: DataTypes.DECIMAL,
            allownull: true,
        }

    });

    Restaurant.associate = (models)=>{
        Restaurant.hasMany(models.Order, {
            onDelete : "cascade",
        });
        Restaurant.hasMany(models.Customer, {
            onDelete : "cascade",
        });
    };
    return Restaurant;
};