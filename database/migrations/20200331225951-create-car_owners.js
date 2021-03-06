'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('car_owners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      car_model: {
        type: Sequelize.STRING
      },
      car_model_year: {
        type: Sequelize.INTEGER
      },
      car_color: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      job_title: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.TEXT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('car_owners');
  }
};
