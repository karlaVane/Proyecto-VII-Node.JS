## Plataformas Web P56 - Proyecto Primer Parcial 

Aplicación en NodeJS que permite leer los datos de las
Suscripciones a telefonía celular móvil, publicadas por el Banco
Mundial y publicar las estadísticas de un determinado país en un
año específico._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋


 * **Linux**

```
sudo apt-get install curl
curl -sLhttps://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs
```
 * **Windows**
 1. Instalar Visual Studio Code
    https://code.visualstudio.com/download
 2. Instalar node.js
    https://nodejs.org/es/
 3. Instalar la extensión del terminal en Visual Studio Code
    En Visual Studio Code, puede abrir una terminal integrada, inicialmente comenzando en la raíz de su espacio de trabajo.


### Instalación 🔧

_Instalar las dependencias utilizadas en el proyecto_

_Ejecutar el siguiente comando en el terminal del sistema o en la terminal de visual studio code_

```
npm install --save
```

_Y repite_

```
hasta finalizar
```

_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

## Ejecutando las pruebas ⚙️

Para ejecutar y visualizarlo tanto en consola como en la página web hay que ejecutar el siguiente comando:

```
node app publicar -f="NombreDirectorio" -c="CódigoPaís" -y="Año desde 1960 hasta 2018"
```
```
node app guardar -f="NombreDirectorio" -c="CódigoPaís" -y="Año desde 1960 hasta 2018" -o="NombreNuevoArchivo"
```
Primer comando es * **publicar** que tiene por parametros obligatorios a:
   file -> alias -f: En este comando se ingresa el directorio o path donde esta ubicado los datos de las suscripciones moviles por pais.
   country -> alias -c: En este comando se ingresa el codigo de del pais.
   year -> alias -y: Permite especificar el año para el cual se requiere las estadísticas.

Primer comando es * **guardar** que tiene por parametros obligatorios a:
   file -> alias -f: En este comando se ingresa el directorio o path donde esta ubicado los datos de las suscripciones moviles por pais.
   country -> alias -c: En este comando se ingresa el codigo de del pais .
   year -> alias -y: En este comando permite especificar el año para el cual se requiere las estadísticas.
   out -> alais -o: Establece el nombre del archivo donde se almacenará los resultados.


### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```


## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

_Las herramientas utilizadas en el proyecto son:_

* [Visual Studio code](https://code.visualstudio.com/) - Editor de código fuente
* **Librerías** 
* [colors](https://www.npmjs.com/package/colors) - colores a la ejecucion de la terminal
* [express](https://expressjs.com/es/) - Express es una infraestructura de aplicaciones web Node.js
* [ejs](https://ejs.co/) - Motor de plantillas
* [morgan](https://www.npmjs.com/package/morgan) - Middleware de registrador de solicitudes HTTP para node.js
* [opn](https://www.npmjs.com/package/open) - Abre automáticamente el navegador al momento de ejecutar el comando publicar
* [yargs](https://www.npmjs.com/package/yargs) - Yargs te ayuda a crear herramientas interactivas de línea de comandos, analizando argumentos y generando una elegante interfaz de usuario.
* [neat-csv](https://www.npmjs.com/package/neat-csv) - Analizador CSV rápido

## Versionado 📌

Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/karlaVane/Proyecto-VII-Node.JS/tags).

## Autores ✒️

* **Gonzalez Diego** - [dgonzalezq2](https://github.com/dgonzalezq2)
* **Moyón Karla** - [karlaVanel](https://github.com/karlaVane/)
* **Parrales Leonel** - [leonelparrales22](https://github.com/leonelparrales22)
* **Velasco Sebastián** - [seguvega](https://github.com/seguvega)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/karlaVane/Proyecto-VII-Node.JS/graphs/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (MIT License) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

⌨️ con ❤️ por [González Diego, Moyón Karla, Parrales Leonel, Velasco Sebastián](https://github.com/karlaVane/Proyecto-VII-Node.JS) 😊

```









































