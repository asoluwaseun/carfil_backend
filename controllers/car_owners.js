"use strict"
const Models = require('../database/models/')

class CarOwners{
    static async getCarOwners(req, res){
        try{


        }
        catch(err){
            console.log(err)
            res.sendStatus(500)
        }
    }
}

module.exports = CarOwners
