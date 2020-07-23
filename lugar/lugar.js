const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://countries-cities.p.rapidapi.com/location/country/${encodedUlr}/geojson`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '2abb5978a4msha5a9c94526d8ef3p10db9ejsnf616da2e2126' }
    });

    instance.get()
        .then(resp => {
            console.log(resp.data);
        })
        .catch(err => {
            console.log(err);
        })

    const resp = await instance.get();

    // if (resp.data.Results.length === 0) {

    //     throw new Error(`No hay resultados para ${dir}`);

    // }


    const data = resp.data;
    // console.log(data);
    // console.log(JSON.stringify(data));
    const direccion = data.code;
    const lat = data.geo_json.coordinates[0][0][0][1];
    const lng = data.geo_json.coordinates[0][0][0][1];
    // const direccion = data.name;
    // const lat = data.lat;
    // const lng = data.lon;

    return {
        direccion,
        lat,
        lng



    }



}

module.exports = {

    getLugarLatLng

}