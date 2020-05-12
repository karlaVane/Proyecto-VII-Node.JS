const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
//configuraciones
app.set('port', 3000);
app.set('views', path.join(__dirname, 'vistas'))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

const argv = require("./config/yargs").argv;
const obtenerData = require("./controller/archivo").obtenerData;
const colors = require("colors");
const crearArchivo = require("./controller/crearJson").crearArchivo;

let data;

const menu = () => {
    let comando = argv._[0];
    switch (comando) {
        case "publicar":
            // node app.js publicar -f="db/API_IT.CEL.SETS_DS2_es_csv_v2_1004854.csv" -c="ECU" -y=1997
            console.log(data.paisesAdyacentes.mayores);
            console.log(`-------------------${data.mediaPais}---------------------`);
            console.log(data.paisesAdyacentes.menores);
            console.log(`Media Global: ${data.mediaGlobal}`);
            console.log(`*****TOP-5*****`);
            console.log(data.top);
            console.log("***FIN DEL PROGRAMA***");
            app.use(router.get('/', (req, res) => {
                res.render('index.html', { title: 'Suscripciones a telefonía celular móvil' });
            }));
            // static files
            app.use(express.static(path.join(__dirname, 'public')))

            //listening the server
            app.listen(app.get('port'), () => {
                console.log(`Server on port`, app.get('port'));
            })
            break;
        case "guardar":
            // node app.js guardar -f="db/API_IT.CEL.SETS_DS2_es_csv_v2_1004854.csv" -c="ECU" -y=1997 -o="HolaMundo
            console.log("Generando Archivo");
            crearArchivo(data.paisesAdyacentes.mayores, data.mediaPais, data.paisesAdyacentes.menores, data.mediaGlobal, data.top, argv.out)
                .then(mensaje => console.log(colors.green(mensaje)))
                .catch(err => console.log(colors.red(err)));
            break;
        default:
            console.log("Comando no existente");
            break;
    }
};

const ejecutar = async() => {
    data = await obtenerData(argv.country, argv.year.toString(), argv.file);
    menu();
    return data;
};

ejecutar()
    .then()
    .catch((err) => {
        console.log(colors.red(err));
    });