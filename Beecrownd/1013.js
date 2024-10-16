const linesTratado = lines[0].split(" ");
const linesNumber = linesTratado.map((i) => +i);
const primMaior =
  (linesNumber[0] +
    linesNumber[1] +
    Math.abs(linesNumber[0] - linesNumber[1])) /
  2;
const maior = primMaior > linesNumber[2] ? primMaior : linesNumber[2];
console.log(`${maior} eh o maior`);
