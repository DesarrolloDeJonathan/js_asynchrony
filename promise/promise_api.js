// instanciamos XMLHttpRequest
// Ya que estamos trabajando con node haremos la importacion asi
const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((data) => {
    // imprimimos el numero de personajes
    console.log(data.info.count);
    // nueva petición o promesa consultando al primer personaje
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then((data) => {
    // esperamos la promesa anterior y vemos el nombre de rick
    console.log(data.name);
    //consultando el origin para mostrar la dimension
    return fetchData(data.origin.url);
  })
  .then((data) => {
    // mostrando la dimension
    console.log(data.dimension);
  })
  // Buena practica capturar el error
  .catch((error) => {
    console.error(error);
  });
