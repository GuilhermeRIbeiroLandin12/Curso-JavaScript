const numeros = [10, 5, 8, 7, 6, 9, 11, 22, 55];

const resultado = {
  pares: 0,
  impares: 0
};

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];

  if (numero % 2 === 0) {
    resultado.pares++;
  } else {
    resultado.impares++;
  }
}

console.log(resultado);