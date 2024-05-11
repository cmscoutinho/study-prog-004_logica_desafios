// 3. Crie um programa que verifica se uma palavra ou frase é um palíndromo.
function strInvert(string) {
  let stringInvertida = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }
  return stringInvertida;
}

function isPalindromo(string) {
  string = string.toLowerCase();
  return string === strInvert(string);
}

// 4. Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.
function ordena(a, b, c) {
  let numeros = [];

  if (a <= b && a <= c) {
    numeros.push(a);
    if (b <= c) {
      numeros.push(b);
      numeros.push(c);
    } else {
      numeros.push(c);
      numeros.push(b);
    }
  } else if (b <= a && b <= c) {
    numeros.push(b);
    if (a <= c) {
      numeros.push(a);
      numeros.push(c);
    } else {
      numeros.push(c);
      numeros.push(a);
    }
  } else {
    numeros.push(c);
    if (a <= b) {
      numeros.push(a);
      numeros.push(b);
    } else {
      numeros.push(b);
      numeros.push(a);
    }
  }

  console.log(numeros);
}
