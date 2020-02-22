const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=40.750000&lon=-74.000000&appid=f538214095e778b9c3d883c8cbb6a075&units=metrics`)


    return resp.data.main.temp;

}

module.exports = {
    getClima

}