const val = `2.5 0.4
12.0 7.0`;

const lines = val.split("\n");
console.log(lines);
const linesTratado = lines.toString().replace(",", " ").split(" ");

console.log(
  Math.sqrt(
    Math.pow(+linesTratado[2] - +linesTratado[0], 2) +
    Math.pow(+linesTratado[3].replace(",","") - +linesTratado[1], 2)
  ).toFixed(4)
);

// Esse replace da linha 11 "conserta" um bug que acontece no último elemento do array
