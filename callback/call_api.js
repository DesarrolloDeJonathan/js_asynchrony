// ########################     Requests to APIs using Callbacks     #########################
// El llamdo a la API lo haremos a la antiguita con xmlHttpRequest este trabaja con callbacks
// Apartir de ES6 se hace con fetch que dentro usa promesas
let xmlHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetchData(url_api, callback) {
  // intanciamos el objeto XMLHttpRequest este elemento fue creado por Microsoft como aporte a JS
  let xhttp = new XMLHttpRequest();
  // hacemos el llamado a la URL con .open(metodo http, url api, boolean true como buena practica para activar el asincronismo de XMLHttpRequest)
  xhttp.open("GET", url_api, true);
  // Escucharemos lo que hara esa conexion y validamos si se esta ejecutando el llamdo
  xhttp.onreadystatechange = function (event) {
    /**Si ese cambio sucede, validaremos si el estado es satisfactorio
     * readyState Holds the status of the XMLHttpRequest.
     * 0: request not initialized
     * 1: server connection established
     * 2: request received
     * 3: processing request
     * 4: request finished and response is ready
     */
    if (xhttp.readyState === 4) {
      // Validamos el status de la peticion
      if (xhttp.status === 200) {
        /**
         * Regresaremos nuestro callback con dos parametros si la validacion es correcta
         * primer parametro el error, para no mandar error lo dejaremos null
         * segundo parametro informacion que se desencadena del resultado del llamado a la API
         */
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        /** Por buenas practicas tenemos este else
         * instanciando el prototipo Error mas la API
         * con el retunr matamos la ejecucion del callback
         * pasando primero el error y luego null para no enviar el resultado desencadenado
         */
        const error = new Error("Error " + url_api);
        return callback(error, null);
      }
    }
    // Por ultimo el envio de la solicitud
    xhttp.send();
  };
}
