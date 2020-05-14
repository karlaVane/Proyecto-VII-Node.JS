const crearTabla = (lista) => {
  let plantilla = "";
  plantilla += '<table class="table"> <thead class="thead-dark">';
  plantilla += '<tr> <th scope="col"> Suscripciones</th><th scope="col">País</th><th scope="col">Código País</th>';
  plantilla += "</tr></thead><tbody>";
  lista.forEach((element) => {
    plantilla += "<tr>";
    plantilla += `<td>${element[0]}</td><td>${element[1]}</td><td>${element[2]}</td>`;
    plantilla += "</tr>";
  });
  plantilla += "</tbody></table>";
  return plantilla;
};

module.exports = {
  crearTabla,
};
