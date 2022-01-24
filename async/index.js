const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(
          () =>
            resolve(
              `Do something Async, after the console.log,
then it will be ejected otherFunction.
three seconds later it appears`,
            ),
          3000,
        )
      : reject(new Error("Error Test"));
  });
};

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

console.log("Before doSomethingAsync");
doSomething();
console.log("After doSomethingAsync");

// Manejo de errores
const otherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.error();
  }
};

console.log("Before otherFunction");
otherFunction();
console.log("After otherFunction");
