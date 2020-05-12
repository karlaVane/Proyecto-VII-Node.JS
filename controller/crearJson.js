const fs = require('fs');

let crearArchivo = (paisesMay, pmedia, paisesMen, medGlob, top, nomArch) => {
    return new Promise((resolve, reject) => {
        let datos = '';
        datos += `${paisesMay}\n`;
        datos += `-------------------${pmedia}---------------------`;
        datos += `Media Global: ${medGlob}\n`;
        datos += `${paisesMen}\n`;
        datos += `*****TOP-5***** \n`;
        datos += `*************** \n`;
        datos += `${top}\n`;
        console.log(`Nombre del archivo ${nomArch}`);

        fs.writeFile(`resultados/${pmedia[1]}.json`, datos, (err) => {
            if (err)
                reject(err);
            else
                resolve(`EL archivo del pais ${pmedia[1]} se a Guardado`);
        });
    });
}
module.exports = {
    crearArchivo
}