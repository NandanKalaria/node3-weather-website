const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=b3703d9474e4b5ff5027b456d33a727d&query=${latitude},${longitude}`

    request({url, json: true},(error, { body }) => {
        
        if(error){
            callback('Unable to connect with the weather service.', undefined)
        }
        else if(body.error){
            callback('Unable to fetch weather. Try another search', undefined)
        }
        else{
            callback(undefined, {
                temperature: body.current.temperature
            })
        }
    })
}

module.exports =  forecast;
