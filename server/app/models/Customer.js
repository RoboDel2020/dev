module.exports = (sequelize, DataTypes)=>{

    const Customer = sequelize.define("Customer", {

        CustomerID:{
            type: DataTypes.INTEGER.UNSIGNED,
            allownull : false,
            primaryKey : true,
            autoIncrement: true,
        },
        FirstName:{
            type: DataTypes.STRING,
            allownull: true,
            
        },
        LastName:{
            type: DataTypes.STRING,
            allownull: true,
            
        },
        Email: {
            type: DataTypes.STRING,
            allownull: true,
        },
        PhoneNumber: {
            type: DataTypes.STRING,
            allownull: true,
        },
        Street: {
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
        }
        
    });

    Customer.associate = (models)=>{
        Customer.hasMany(models.Orders, {
            onDelete : "cascade",
        });
    };
    return Customer;
};