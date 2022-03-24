module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull:true
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull:true
    },
    phonenumber: {
      type: Sequelize.STRING, 
      allowNull:true
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull:true
    },
    role: {
      type: Sequelize.STRING, 
      allowNull:true
    },
    city: {
      type: Sequelize.STRING, 
      allowNull:true
    },
    state: {
      type: Sequelize.STRING, 
      allowNull:true
    },
    zip: {
      type: Sequelize.STRING, 
      allowNull:true
    },
    county: {
      type: Sequelize.STRING, 
      allowNull:true
    }
  });

  return User;
};
