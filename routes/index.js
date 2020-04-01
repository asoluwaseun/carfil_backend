"use strict"
const express = require("express");
const router = express.Router();

const { getFilters } = require('../controllers/filters')
const { getCarOwners } = require('../controllers/car_owners')

router.get('/filters', getFilters)
router.get('/car-owners', getCarOwners)

module.exports = router
