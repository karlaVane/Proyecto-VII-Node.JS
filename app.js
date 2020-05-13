const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
//configuraciones
app.set("port", 3000);
app.set("views", path.join(__dirname, "vistas"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

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
      // node app.js publicar -f="/home/leonel/Descargas/API_IT.CEL.SETS_DS2_es_csv_v2_1004854.csv" -c="ECU" -y=1997
      console.log("------------------------------------------------------".rainbow);
      console.log(`Media Global del año ${argv.year}:`.cyan, `${data.mediaGlobal}`);
      console.log("------------------------------------------------------".rainbow);
      console.log(`Suscripciones de ${argv.country}:`.cyan, `${data.mediaPais}`);
      if (data.mediaPais > data.mediaGlobal) {
        console.log(`La media de ${argv.country} es mayor a la media mundial`.blue);
      } else {
        console.log(`La media de ${argv.country} es menor a la media mundial`.red);
      }
      console.log("------------------------------------------------------".rainbow);
      console.log(`Paises por encima de la suscripcion de ${argv.country}:`.magenta);
      console.log(data.paisesAdyacentes.mayores);
      console.log("------------------------------------------------------".rainbow);
      console.log(`Paises por debajo de la suscripcion de ${argv.country}:`.cyan);
      console.log(data.paisesAdyacentes.menores);
      console.log("------------------------------------------------------".rainbow);
      console.log(`TOP-5 de Suscripciones en el año ${argv.year}`.magenta);
      console.log(data.top);
      console.log("----------------------FIN DEL PROGRAMA-------------------".rainbow);

      tabla = "<table>";
      data.paisesAdyacentes.mayores.forEach((element) => {
        tabla = tabla + "<tr>";
        tabla = tabla + `<td>${element[0]}</td><td>${element[1]}</td><td>${element[2]}</td>`;
        tabla = tabla + "</tr>";
      });
      tabla = tabla + "</table>";

      app.use(
        router.get("/", (req, res) => {
          res.render("index.html", { title: "Suscripciones a telefonía celular móvil", data: data, argv: argv, mayores: tabla });
        })
      );
      // static files
      app.use(express.static(path.join(__dirname, "public")));

      //listening the server
      app.listen(app.get("port"), () => {
        console.log(`Server on port`, app.get("port"));
      });
      break;
    case "guardar":
      // node app.js guardar -f="db/API_IT.CEL.SETS_DS2_es_csv_v2_1004854.csv" -c="ECU" -y=1997 -o="HolaMundo
      console.log("Generando Archivo...".blue);
      crearArchivo(data.paisesAdyacentes.mayores, data.mediaPais, data.paisesAdyacentes.menores, data.mediaGlobal, data.top, argv.out)
        .then((mensaje) => console.log(colors.green(mensaje)))
        .catch((err) => console.log(colors.red(err)));
      break;
    default:
      console.log("Comando no existente");
      break;
  }
};

const ejecutar = async () => {
  data = await obtenerData(argv.country, argv.year.toString(), argv.file);
  menu();
  return data;
};

ejecutar()
  .then()
  .catch((err) => {
    console.log(colors.red(err));
  });
