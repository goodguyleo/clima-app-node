const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({

    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para optener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(console.log);



// clima.getClima(70.130000, -7.129997)
//     .then(console.log)
//     .catch(console.log);



const getInfo = async(direccion) => {

    try {

        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima de ${coordenadas.direccion} es de ${temp}.`;


    } catch (error) {

        return ' no de pudo determinar el clima'

    }



}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);