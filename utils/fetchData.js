const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    let reponse;
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          response = JSON.parse(xhttp.responseText);
          resolve(response);
        } else {
          reponse = new Error("Error", url_api);
          reject(response);
        }
      }
    };
    xhttp.send();
  });
};
// Ya que estamos trabajando con node haremos la importacion asi
module.exports = fetchData;
