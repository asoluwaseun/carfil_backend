"use strict"
const Models = require('../database/models/')

class Filters{
    static  async getFilters(req, res){
        try{
            let filters = await Models.filters.findAll()

            let response = {
                data: filters,
                message: filters.length > 0 ? `${filters.length} found` : "No filter found"
            }

            res.status(200).json(response)
        }
        catch(err){
            console.log(err)
            res.sendStatus(500)
        }
    }
}

module.exports = Filters
