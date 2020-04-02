"use strict"
const Models = require('../database/models/')
const axios = require('axios')
const Op = require('sequelize').Op

class CarOwners{
    static async getCarOwners(req, res){
        try{
            let { filter: filter_id } = req.query
            filter_id = parseInt(filter_id)
            filter_id = filter_id && typeof(filter_id) === "number" ? filter_id : null

            let filter = null;

            if(filter_id){
                let {data: filters} = await axios.get('https://ven10.co/assessment/filter.json')

                let [ _filter ] = filters.filter((__filter)=>{
                    return __filter.id === filter_id
                })
                filter = _filter
            }

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
                where: filter_conditions,
                limit: 500
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
