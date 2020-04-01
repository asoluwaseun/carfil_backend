'use strict';
module.exports = (sequelize, DataTypes) => {
  const filters = sequelize.define('filters', {
    start_year: DataTypes.INTEGER,
    end_year: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    countries: DataTypes.JSON,
    colors: DataTypes.JSON
  }, {
    timestamps: false
  });
  filters.associate = function(models) {
    // associations can be defined here
  };
  return filters;
};
