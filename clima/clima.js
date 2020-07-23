const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f538214095e778b9c3d883c8cbb6a075&units=metric`)
        // console.log(resp.data);

    return resp.data.main.temp;

}

module.exports = {
    getClima

}