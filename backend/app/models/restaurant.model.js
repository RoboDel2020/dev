module.exports = (sequelize, Sequelize) => {
    const Restaurant = sequelize.define("restaurant", {
        name:{
            type: Sequelize.STRING,
            allownull: false,
        },
        price: {
            type: Sequelize.DECIMAL(10,2),
            allownull: true,
        },
        type: {
            type: Sequelize.STRING,
            allownull: true,
        },
        address: {
            type: Sequelize.STRING, 
            allownull: false,
        },
        city: {
            type: Sequelize.STRING, 
            allownull: false,
        },
        state: {
            type: Sequelize.STRING,
            allownull: true,
        },
        zip: {
            type: Sequelize.STRING,
            allownull: true,
        },
        country: {
            type: Sequelize.STRING,
            allownull : false,
        },
        longitude:{
            type: Sequelize.DECIMAL(10,6),
            allownull: true,
            
        },
        latitude:{
            type: Sequelize.DECIMAL(10,6),
            allownull: true,
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    });
    return Restaurant;
  };





// module.exports = (sequelize, Sequelize)=>{

//     const Restaurant = sequelize.define("restaurant", {

//         name:{
//             type: Sequelize.STRING,
//             allownull: false,
//         },
//         price: {
//             type: Sequelize.DECIMAL,
//             allownull: true,
//         },
//         type: {
//             type: Sequelize.STRING,
//             allownull: true,
//         },
//         city: {
//             type: Sequelize.STRING, 
//             allownull: false,
//         },
//         state: {
//             type: Sequelize.STRING,
//             allownull: true,
//         },
//         zip: {
//             type: DataTypes.STRING,
//             allownull: true,
//         },
//         country: {
//             type: Sequelize.STRING,
//             allownull : false,
//         },
//         longitude:{
//             type: Sequelize.DECIMAL,
//             allownull: true,
            
//         },
//         latitude:{
//             type: Sequelize.DECIMAL,
//             allownull: true,
//         },
//         published: {
//             type: Sequelize.BOOLEAN
//         }

//     });

//     Restaurant.associate = (models)=>{
//         Restaurant.hasMany(models.Order, {
//             onDelete : "cascade",
//         });
//         Restaurant.hasMany(models.Customer, {
//             onDelete : "cascade",
//         });
//     };
//     return Restaurant;
// };