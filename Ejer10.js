const { log } = require("console");
const { arrayBuffer } = require("stream/consumers");

function solution(s1, s2) {
  let total = 0;
  let arrayCadena = Array.from(s2.split(""));
  for (let i = 0; i < arrayCadena.length; i++) {
    let posicion1 = s1.search(arrayCadena[i]);
    let posicion2 = s2.search(arrayCadena[i])
    if (posicion1 >= 0 && posicion2 >= 0) {
        total++;
        s1 = s1.split("");
        s1.splice(posicion1,1);
        s1 = s1.join("");
        s2 = s2.split("");
        s2.splice(posicion2,1);
        s2 = s2.join("");
        console.log(s1, s2);
    }
  }
    return total;
}