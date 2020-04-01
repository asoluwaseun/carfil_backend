"use strict"
const fast_csv = require('fast-csv')
const fs = require('fs')
const path = require('path')
const Models = require('../database/models/')

/**
 *  Class for commonly used functions
 */
class Helpers{
    /**
     * This function serves to migrate car owners data from the CSV file into the database.
     */
    static migrateCarOwners(){
        try{
            let csv = fs.createReadStream(path.resolve('./public/car_owners_data.csv'))
            let car_owners = []

            csv.pipe(fast_csv.parse().on("data", (_data)=>{
                car_owners.push({
                    first_name: _data[1],
                    last_name: _data[2],
                    email: _data[3],
                    country: _data[4],
                    car_model: _data[5],
                    car_model_year: _data[6],
                    car_color: _data[7],
                    gender: _data[8],
                    job_title: _data[9],
                    bio: _data[10]
                })
            }).on("end", async ()=>{
                car_owners.shift()
                await Models.car_owners.bulkCreate(car_owners)
                console.log("Successful")
            }))


        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = Helpers;
