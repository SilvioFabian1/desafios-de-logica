const valor = "3.0 4.0 5.2";

const arrayValor = valor.split(" ");

console.log(`TRIANGULO: ${((+arrayValor[0] * +arrayValor[2]) / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(+arrayValor[2] * +arrayValor[2] * 3.14159).toFixed(3)}`);
console.log(`TRAPEZIO: ${(((+arrayValor[0] + +arrayValor[1]) / 2) * +arrayValor[2]).toFixed(3)}`);
console.log(`QUADRADO: ${(+arrayValor[1] * +arrayValor[1]).toFixed(3)}`);
console.log(`RETANGULO: ${(+arrayValor[0] * +arrayValor[1]).toFixed(3)}`);
