// 2. Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.
function str2int(str) {
  return parseInt(str);
}

// 3. Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.
function soma(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

let op = '*';
let a = 15;
let b = 5;

switch (op) {
  case '+':
    alert(soma(a, b));
    break;
  case '-':
    alert(sub(a, b));
    break;
  case '*':
    alert(mult(a, b));
    break;
  case '/':
    alert(div(a, b));
    break;
}

// 4. Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.
function isPar(num) {
  if (num % 2 == 0) return true;
  else return false;
}

// 5. Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar
function convTemp(temp, mode) {
  if (mode == 1) return temp * (9 / 5) + 32;
  else if (mode == 2) return (temp - 32) * (5 / 9);
  else return 0;
}
