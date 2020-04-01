'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('filters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      start_year: {
        type: Sequelize.INTEGER
      },
      end_year: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      countries: {
        type: Sequelize.JSON
      },
      colors: {
        type: Sequelize.JSON
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('filters');
  }
};
