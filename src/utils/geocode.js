const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibmFuZGFua2FsYXJpYSIsImEiOiJja2FnOW9rYWgwNGk2MnlvNWE2cWpqMDlqIn0.7XDSWzHmfl3a8kh0Ay_X1g'

    request({url, json: true},(error, { body }) => { 

        if(error){
            callback('Unable to connect with the location service.', undefined)
        }
        else if(body.features.length === 0){
            callback('Unable to find the location. Try another search', undefined)
        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports =  geoCode;
