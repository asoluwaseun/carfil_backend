"use strict"
const Models = require('../database/models/')
const axios = require('axios')

class Filters{
    static  async getFilters(req, res){
        try{
            let {data: result } = await axios.get('https://ven10.co/assessment/filter.json');

            let filters = []
            if(result){
                filters = result
            }

            let response = {
                data: filters
            }

            res.status(200).send(response)
        }
        catch(err){
            res.sendStatus(500)
        }
    }
}

module.exports = Filters
