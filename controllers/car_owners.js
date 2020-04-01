"use strict"
const Models = require('../database/models/')
const Op = require('sequelize').Op

class CarOwners{
    static async getCarOwners(req, res){
        try{
            let { filter : filter_id} = req.query

            let filter = filter_id ? await Models.filters.findOne({
                where: {
                    id: filter_id
                }
            }) : null

            let filter_conditions = {}

            if(filter && filter.start_date && filter.end_date){
                filter_conditions.car_model_year = {
                    [Op.between]: [filter.start_date, filter.end_date]
                }
            }

            if(filter && filter.gender){
                filter_conditions.gender = filter.gender
            }

            if(filter && filter.countries && filter.countries.length > 0){
                filter_conditions.country = {
                    [Op.in]: filter.countries
                }
            }

            if(filter && filter.colors && filter.colors.length > 0){
                filter_conditions.car_color = {
                    [Op.in]: filter.colors
                }
            }

            let car_owners = await Models.car_owners.findAll({
                where: filter_conditions
            })

            let response = {
                data: car_owners,
                message: car_owners.length > 0 ? `${car_owners.length} found` : "No car owner found"
            }

            res.status(200).send(response)

        }
        catch(err){
            console.log(err)
            res.sendStatus(500)
        }
    }
}

module.exports = CarOwners
