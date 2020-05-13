const fs = require('fs');
let datos = [];
let crearArchivo = (paisesMay, pmedia, paisesMen, medGlob, top, nomArch) => {
    return new Promise((resolve, reject) => {

        datos.push(paisesMay);
        datos.push(pmedia);
        datos.push(`Media Global: ${medGlob}`);
        datos.push(paisesMen);
        datos.push(`TOP-5\n ${top}`);
        console.log(`Nombre del archivo ${nomArch}`);
        let data = JSON.stringify(datos);
        fs.writeFile(`resultados/${nomArch}.json`, data, (err) => {
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

/*      datos += `${paisesMay}\n`;
        datos += `-------------------${pmedia}---------------------`;
        datos += `Media Global: ${medGlob}\n`;
        datos += `${paisesMen}\n`;
        datos += `*****TOP-5***** \n`;
        datos += `*************** \n`;
        datos += `${top}\n`;
        console.log(`Nombre del archivo ${nomArch}`);
*/