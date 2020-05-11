const fs = require("fs");
const neatCsv = require("neat-csv");
const colors = require("colors");
let informacion = [];
let datosPorAnio = [];
/* 
datosPorAnio[i][0] = Valor Suscripcion: number
datosPorAnio[i][1] = Nombre del Pais: string
datosPorAnio[i][2] = Codigo del Pais: string 
*/

/* Valida que el número sea de typo number */
const validarNumero = (numero) => {
  if (!Number(numero)) {
    throw Error(`${numero}: No es un numero`);
  }
};

/* Lee el documento y carga en le varible global: "informacion":object */
const cargarDatos = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, async (err, data) => {
      if (err) {
        reject("Error al leer el archivo");
      } else {
        resolve((informacion = await neatCsv(data)));
      }
    });
  });
};

/* Carga los valores de suscripciones en la variable "datosPorAnio":object */
const vectorPorAnio = async (anio) => {
  let anios = Object.values(informacion[3]);
  anio = anios.indexOf(anio);
  for (let index = 4; index < informacion.length; index++) {
    datosPorAnio.push([parseInt(informacion[index][anio]), informacion[index][0], informacion[index][1]]);
  }
  return true;
};

/* Limpieza de paises no registrados*/
const limpiarPaises = () => {
  aux = [];
  let paisesValidos = [
    "ABW",
    "AFG",
    "AGO",
    "ALB",
    "AND",
    "ARE",
    "ARG",
    "ARM",
    "ASM",
    "ATG",
    "AUS",
    "AUT",
    "AZE",
    "BDI",
    "BEL",
    "BEN",
    "BFA",
    "BGD",
    "BGR",
    "BHR",
    "BHS",
    "BIH",
    "BLR",
    "BLZ",
    "BMU",
    "BOL",
    "BRA",
    "BRB",
    "BRN",
    "BTN",
    "BWA",
    "CAF",
    "CAN",
    "CHE",
    "CHL",
    "CHN",
    "CIV",
    "CMR",
    "COD",
    "COG",
    "COL",
    "COM",
    "CPV",
    "CRI",
    "CUB",
    "CUW",
    "CYM",
    "CYP",
    "CZE",
    "DEU",
    "DJI",
    "DMA",
    "DNK",
    "DOM",
    "DZA",
    "ECU",
    "EGY",
    "ERI",
    "ESP",
    "EST",
    "ETH",
    "FIN",
    "FJI",
    "FRA",
    "FRO",
    "FSM",
    "GAB",
    "GBR",
    "GEO",
    "GHA",
    "GHA",
    "GIB",
    "GMB",
    "GNB",
    "GNQ",
    "GRC",
    "GRD",
    "GRL",
    "GTM",
    "GUM",
    "GUY",
    "HKG",
    "HND",
    "HRV",
    "HTI",
    "HUN",
    "IDN",
    "IMN",
    "IND",
    "IRL",
    "IRN",
    "IRQ",
    "ISL",
    "ISR",
    "ITA",
    "JAM",
    "JOR",
    "JPN",
    "KAZ",
    "KEN",
    "KGZ",
    "KHM",
    "KIR",
    "KNA",
    "KOR",
    "KWT",
    "LBN",
    "LBR",
    "LBY",
    "LCA",
    "LIE",
    "LKA",
    "LSO",
    "LTU",
    "LUX",
    "LVA",
    "MAF",
    "MAR",
    "MCO",
    "MDA",
    "MDG",
    "MDV",
    "MEX",
    "MHL",
    "MKD",
    "MLI",
    "MLT",
    "MMR",
    "MNE",
    "MNG",
    "MNP",
    "MOZ",
    "MRT",
    "MUS",
    "MWI",
    "MYS",
    "NAM",
    "NCL",
    "NER",
    "NGA",
    "NIC",
    "NOR",
    "NPL",
    "NRU",
    "NZL",
    "OMN",
    "PAK",
    "PAN",
    "PER",
    "PHL",
    "PLW",
    "PNG",
    "POL",
    "PRI",
    "PRK",
    "PRT",
    "PRY",
    "PSE",
    "PYF",
    "QAT",
    "ROU",
    "RUS",
    "RWA",
    "SAU",
    "SDN",
    "SEN",
    "SGP",
    "SLB",
    "SLE",
    "SLV",
    "SMR",
    "SOM",
    "SRB",
    "SSD",
    "STP",
    "SUR",
    "SVK",
    "SWE",
    "SWZ",
    "SXM",
    "SYC",
    "SYR",
    "TCA",
    "TCD",
    "TGO",
    "THA",
    "TJK",
    "TKM",
    "TON",
    "TTO",
    "TUN",
    "TUR",
    "TUV",
    "TZA",
    "UGA",
    "UKR",
    "URY",
    "USA",
    "UZB",
    "VCT",
    "VEN",
    "VNM",
    "VUT",
    "WSM",
    "XKX",
    "YEM",
    "ZWE",
  ];
  datosPorAnio.forEach((element) => {
    if (paisesValidos.includes(element[2])) {
      aux.push(element);
    }
  });
  datosPorAnio = aux;
};

/* Comprueba si el codigo del pais ingresado existe en el listado */
const comprobarPais = (cod_Pais) => {
  return new Promise((resolve, reject) => {
    datosPorAnio.forEach((element) => {
      if (element[2] == cod_Pais) {
        resolve(true);
        return;
      }
    });
    reject("País no encontrado");
  });
};

/* Comprueba si anio ingresado existe en el listado*/
const comprobarAnio = (anio) => {
  let anios = Object.values(informacion[3]);
  return new Promise((resolve, reject) => {
    anios.forEach((element) => {
      if (element == anio) {
        resolve(true);
        return;
      }
    });
    reject("Anio no encontrado");
  });
};

/* Media Global en el anio especificado */
const _mediaMundial = () => {
  media = 0;
  contador = 0;
  datosPorAnio.forEach((element) => {
    if (!isNaN(element[0]) && element[0] > 0) {
      media = media + element[0];
      contador++;
    }
  });
  promedio = media / contador;
  if (isNaN(promedio)) {
    promedio = 0;
  }
  return promedio;
};

/* Valor de suscripcion del pais y anio especificado */
const _mediaPais = (codPais) => {
  dato = [];
  datosPorAnio.forEach((element) => {
    if (element[2] == codPais) {
      dato = element;
      return;
    }
  });
  return dato;
};

/* Devuelve cinco paises por debajo y arriba del pais y año indicado */
const _paisesAdyacentes = (numero, cod_Pais) => {
  mayores = [];
  menores = [];
  if (numero == 0) {
    return { mayores: mayores, menores: menores };
  }
  datosPorAnio.forEach((num) => {
    if (num[0] < numero) {
      menores.push(num);
    }
    if (num[0] > numero) {
      mayores.push(num);
    }
    if (num[0] == numero && num[2] != cod_Pais) {
      mayores.push(num);
    }
  });
  mayores.sort(function (a, b) {
    return b[0] - a[0];
  });
  menores.sort(function (a, b) {
    return b[0] - a[0];
  });
  if (mayores.length >= 5) {
    mayores = mayores.slice(mayores.length - 5, mayores.length);
  } else {
    mayores = mayores.slice(0, mayores.length);
  }
  menores = menores.slice(0, 5);
  for (i = menores.length - 1; i >= 0; --i) {
    if (menores[i][0] == 0) {
      menores.splice(i, 1);
    }
  }
  return { mayores: mayores, menores: menores };
};

/* Devuelve los cincos valores mayores al año especificado */
const _top = () => {
  datosPorAnio = datosPorAnio.filter((e) => e[0] === 0 || e[0]);
  for (i = datosPorAnio.length - 1; i >= 0; --i) {
    if (datosPorAnio[i][0] == 0) {
      datosPorAnio.splice(i, 1);
    }
  }
  datosPorAnio.sort(function (a, b) {
    return b[0] - a[0];
  });
  datosPorAnio = datosPorAnio.slice(0, 5);
  if (datosPorAnio.length == 0) {
    return datosPorAnio;
  }
  if (datosPorAnio[0][0] == 0) {
    datosPorAnio = [];
  }

  return datosPorAnio;
};

/* Devulve toda la data para ser consumida */
const obtenerData = async (codPais, anio, path) => {
  await cargarDatos(path);
  validarNumero(anio);
  vectorPorAnio(anio);
  limpiarPaises();
  await comprobarAnio(anio);
  await comprobarPais(codPais);
  let mediaGlobal = _mediaMundial();
  let mediaPais = _mediaPais(codPais);
  let paisesAdyacentes = _paisesAdyacentes(mediaPais[0], codPais);
  let top = _top();
  return { mediaGlobal, mediaPais, top, paisesAdyacentes };
};

module.exports = {
  obtenerData,
};