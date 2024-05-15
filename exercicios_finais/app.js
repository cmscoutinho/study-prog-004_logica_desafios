// 1. Crie uma função que valide se um número é positivo, negativo ou zero.
function sign(num) {
  if (num < 0) {
    return 'negativo';
  } else if (num > 0) {
    return 'positivo';
  } else {
    return 'zero';
  }
}

// 2. Implemente uma função que verifique se uma pessoa é maior de idade.
function eMaior(idade) {
  return idade >= 18 ? 'maior' : 'menor';
}

// 3. Desenvolva uma função que valide se uma string é vazia ou não.
function isStrVazia(str) {
  return str === '';
}

// 4. Crie uma função que determine se um ano é bissexto
function bissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

// 5. Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
function media(n1, n2) {
  if (isNaN(n1) || isNaN(n2)) {
    return null;
  } else {
    return (n1 + n2) / 2;
  }
}

// 6. Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.
function tamArray(arr) {
  return arr.length;
}

// 7. Crie um array e utilize a função includes para verificar se um elemento específico está presente
arr = [4, 6, 1, 19];
console.log(arr.includes(11));

// 8. Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.
function existe(arr, num) {
  return arr.includes(num);
}

// 9. Crie um array de strings e utilize includes para verificar se uma determinada string está presente.
arr = ["Guns n' Roses", 'Iron Maiden', 'Aerosmith', 'Megadeth', 'Metallica'];
console.log(arr.includes('Aerosmith'));

// 10. Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.
// não vimos objetos

// 11. Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.
function foo(arr) {
  let soma = 0;
  let produto = 1;

  for (let numero of arr) {
    if (numero % 2 == 0) soma += numero;
    else produto *= numero;
  }

  return { soma, produto };
}
