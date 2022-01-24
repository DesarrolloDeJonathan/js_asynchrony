// condicional operador ternary
const somethingWillHappen = () =>
  new Promise((resolve, reject) =>
    true ? resolve("Hey!") : reject("Whoops!"),
  );
somethingWillHappend()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

// condicional if
const somethingWillHappend2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => resolve("True"), 3000);
    } else {
      const error = new Error("Upss");
      reject(error);
    }
  });
};
somethingWillHappend2()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

Promise.all([somethingWillHappend(), somethingWillHappend2()])
  .then((response) => console.log("Array of results", response))
  .catch((err) => console.log(err));
