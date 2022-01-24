const fetchData = require("../utils/fetchData");
let API = "https://rickandmortyapi.com/api/character/";

const otherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${url_api}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {
    console.error();
  }
};

console.log("Before otherFunction");
otherFunction(API);
console.log("After otherFunction");
