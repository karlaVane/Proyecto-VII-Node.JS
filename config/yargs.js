let publicar = {
    file: {
        demand: true,
        alias: 'f',
        desc: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },
    country: {
        demand: true,
        alias: 'c',
        desc: ' Permite determinar el país a analizar a través de su código'
    },
    year: {
        default: 2018,
        alias: 'y',
        desc: 'Permite especificar el año para el cual se requiere las estadísticas'
    }
}

let guardar = {
    out: {
        demand: true, // aqui va el path
        alias: 'o',
        desc: ' Establece el nombre del archivo donde se almacenará los resultados.'
    }
}

const argv = require('yargs')
    .command('publicar', 'Este comando publicará las estadísticas en una página web', publicar)
    .command('guardar', 'Este comando almacenará los resultados de las estadísticas en un archivo json', guardar)
    .help().argv;

module.exports = {
    argv
}