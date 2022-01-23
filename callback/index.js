// Ejemplo de lo que es un callback
function sum(num1, num2) {
  return num1 + num2;
}
function calc(num1, num2, callback) {
  return callback(num1, num2);
}
console.log(calc(2, 2, sum));

// Ejemplo callback con fechas
function date(callback) {
  // para ver la diferencia entre los dos llamados
  console.log("Soy la fecha ahora, antes del setTimeout" + new Date());
  setTimeout(() => {
    let date = new Date();
    callback(date);
  }, 6000);
}

function printDate(dateNow) {
  console.log("Llamdo luego de seis segundos" + dateNow);
}

date(printDate);
