'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('filters', [
            {
              "id": 1,
              "start_year": 1990,
              "end_year": 2010,
              "gender": "male",
              "countries": `[
                "China",
                "South Africa",
                "france",
                "Mexico",
                "Japan",
                "Estonia",
                "Colombia",
                "China"
              ]`,
              "colors": `[
                "Green",
                "Violet",
                "Yellow",
                "Blue",
                "Teal",
                "Maroon",
                "Red",
                "Aquamarine",
                "Orange",
                "Mauv"
              ]`
            },
            {
              "id": 2,
              "start_year": 1990,
              "end_year": 2010,
              "gender": "",
              "countries": `[
                "China",
                "South Africa",
                "france",
                "Mexico",
                "Japan",
                "Estonia",
                "Colombia",
                "China"
              ]`,
              "colors": `[
                "Green",
                "Violet",
                "Yellow",
                "Blue",
                "Teal",
                "Maroon",
                "Red",
                "Aquamarine",
                "Orange",
                "Mauv"
              ]`
            },
            {
              "id": 3,
              "start_year": 1980,
              "end_year": 2002,
              "gender": "female",
              "countries": "[]",
              "colors": `[
                "Green",
                "Violet",
                "Yellow",
                "Blue",
                "Teal",
                "Maroon",
                "Red",
                "Aquamarine",
                "Orange",
                "Mauv"
              ]`
            },
            {
              "id": 4,
              "start_year": 1990,
              "end_year": 2000,
              "gender": "",
              "countries": "[]",
              "colors": "[]"
            },
            {
              "id": 5,
              "start_year": 1990,
              "end_year": 2009,
              "gender": "",
              "countries": `[
                "China",
                "South Africa",
                "france",
                "Mexico",
                "Japan",
                "Estonia",
                "Colombia",
                "China"
              ]`,
              "colors": "[]"
            }
          ]
      );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('filters', null, {});
  }
};
