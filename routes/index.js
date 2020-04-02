"use strict"
const express = require("express");
const router = express.Router();

const { getFilters } = require('../controllers/filters')
const { getCarOwners } = require('../controllers/car_owners')

/**
 * @api {get} /filters Gets all filters.
 * @apiName Filters
 * @apiGroup Filters
 *
 * @apiSuccess {Number} id Filter id.
 * @apiSuccess {Number} start_year Filter start year.
 * @apiSuccess {Number} end_year Filter end year.
 * @apiSuccess {String} gender Filter gender.
 * @apiSuccess {Object[]} countries Filter countries.
 * @apiSuccess {Object[]} colors Filter colors
 *
 * @apiSuccessExample {json}Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "data": [
 *          {
 *              "id": 2,
 *              "start_year": 1990,
 *              "end_year": 2010,
 *              "gender": "",
 *              "countries": [
 *                   "China",
 *                   "South Africa",
 *                   "france",
 *                   "Mexico",
 *                   "Japan",
 *                  "Estonia",
 *                   "Colombia",
 *                   "China"
 *               ],
 *               "colors": [
 *                   "Green",
 *                   "Violet",
 *                   "Yellow",
 *                   "Blue",
 *                   "Teal",
 *                   "Maroon",
 *                   "Red",
 *                   "Aquamarine",
 *                   "Orange",
 *                   "Mauv"
 *               ]
 *           },
 *           {
 *              "id": 4,
 *               "start_year": 1990,
 *              "end_year": 2000,
 *               "gender": "",
 *               "countries": [],
 *              "colors": []
 *          }
 *       ],
 *       "message": "2 found"
 *   }
 *
 */

router.get('/filters', getFilters)



/**
 * @api {get} /car-owners?filter=1 Gets all car owners.
 * @apiName CarOwners
 * @apiGroup CarOwners
 *
 * @apiParam{Number} id Filter id.
 * @apiParam {Number} start_year Filter start year.
 * @apiParam {Number} end_year Filter end year.
 * @apiParam {String} gender Filter gender.
 * @apiParam {Object[]} countries Filter countries.
 * @apiParam {Object[]} colors Filter colors
 *
 * @apiSuccess {Number} id Car owner id.
 * @apiSuccess {Number} first_name Car owner first name.
 * @apiSuccess {Number} last_name Car owner last name.
 * @apiSuccess {String} email Car owner email.
 * @apiSuccess {String} country Car owner country.
 * @apiSuccess {String} car_model Car owner car's model/brand
 * @apiSuccess {Number} car_model_year Car owner car's model year
 * @apiSuccess {String} car_color Car owner car's color
 * @apiSuccess {String} gender Car owner gender
 * @apiSuccess {String} job_title Car owner job title
 * @apiSuccess {String} bio Car owner bio
 *
 * @apiSuccessExample {json}Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "data": [
 *         {
 *              "id": 3,
 *              "first_name": "Vannie",
 *              "last_name": "Fitzer",
 *              "email": "vfitzer1@samsung.com",
 *              "country": "France",
 *              "car_model": "Chrysler",
 *              "car_model_year": 2005,
 *              "car_color": "Green",
 *              "gender": "Female",
 *              "job_title": "VP Quality Control",
 *              "bio": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
 *          },
 *          {
 *              "id": 6,
 *              "first_name": "Gusty",
 *              "last_name": "Klemt",
 *              "email": "gklemt4@meetup.com",
 *              "country": "Argentina",
 *              "car_model": "Honda",
 *              "car_model_year": 2006,
 *              "car_color": "Aquamarine",
 *              "gender": "Female",
 *              "job_title": "Legal Assistant",
 *              "bio": "Pellentesque ultrices mattis odio. Donec vitae nisi."
 *          }
 *       ],
 *       "message": "2 found"
 *   }
 *
 */
router.get('/car-owners', getCarOwners)

module.exports = router
