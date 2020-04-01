define({ "api": [
  {
    "type": "get",
    "url": "/car-owners?filter=1",
    "title": "Gets all car owners.",
    "name": "CarOwners",
    "group": "CarOwners",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Car owner id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "first_name",
            "description": "<p>Car owner first name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "last_name",
            "description": "<p>Car owner last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Car owner email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Car owner country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "car_model",
            "description": "<p>Car owner car's model/brand</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "car_model_year",
            "description": "<p>Car owner car's model year</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "car_color",
            "description": "<p>Car owner car's color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Car owner gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "job_title",
            "description": "<p>Car owner job title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>Car owner bio</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n   \"data\": [\n      {\n           \"id\": 3,\n           \"first_name\": \"Vannie\",\n           \"last_name\": \"Fitzer\",\n           \"email\": \"vfitzer1@samsung.com\",\n           \"country\": \"France\",\n           \"car_model\": \"Chrysler\",\n           \"car_model_year\": 2005,\n           \"car_color\": \"Green\",\n           \"gender\": \"Female\",\n           \"job_title\": \"VP Quality Control\",\n           \"bio\": \"Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\"\n       },\n       {\n           \"id\": 6,\n           \"first_name\": \"Gusty\",\n           \"last_name\": \"Klemt\",\n           \"email\": \"gklemt4@meetup.com\",\n           \"country\": \"Argentina\",\n           \"car_model\": \"Honda\",\n           \"car_model_year\": 2006,\n           \"car_color\": \"Aquamarine\",\n           \"gender\": \"Female\",\n           \"job_title\": \"Legal Assistant\",\n           \"bio\": \"Pellentesque ultrices mattis odio. Donec vitae nisi.\"\n       }\n    ],\n    \"message\": \"2 found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "CarOwners"
  },
  {
    "type": "get",
    "url": "/filters",
    "title": "Gets all filters.",
    "name": "Filters",
    "group": "Filters",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Filter id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "start_year",
            "description": "<p>Filter start year.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "end_year",
            "description": "<p>Filter end year.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Filter gender.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "countries",
            "description": "<p>Filter countries.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "colors",
            "description": "<p>Filter colors</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n   \"data\": [\n       {\n           \"id\": 2,\n           \"start_year\": 1990,\n           \"end_year\": 2010,\n           \"gender\": \"\",\n           \"countries\": [\n                \"China\",\n                \"South Africa\",\n                \"france\",\n                \"Mexico\",\n                \"Japan\",\n               \"Estonia\",\n                \"Colombia\",\n                \"China\"\n            ],\n            \"colors\": [\n                \"Green\",\n                \"Violet\",\n                \"Yellow\",\n                \"Blue\",\n                \"Teal\",\n                \"Maroon\",\n                \"Red\",\n                \"Aquamarine\",\n                \"Orange\",\n                \"Mauv\"\n            ]\n        },\n        {\n           \"id\": 4,\n            \"start_year\": 1990,\n           \"end_year\": 2000,\n            \"gender\": \"\",\n            \"countries\": [],\n           \"colors\": []\n       }\n    ],\n    \"message\": \"2 found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Filters"
  }
] });
