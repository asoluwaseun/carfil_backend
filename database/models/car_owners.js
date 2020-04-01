'use strict';
module.exports = (sequelize, DataTypes) => {
  const car_owners = sequelize.define('car_owners', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    country: DataTypes.STRING,
    car_model: DataTypes.STRING,
    car_model_year: DataTypes.INTEGER,
    car_color: DataTypes.STRING,
    gender: DataTypes.STRING,
    job_title: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    timestamps: false
  });
  car_owners.associate = function(models) {
    // associations can be defined here
  };
  return car_owners;
};
