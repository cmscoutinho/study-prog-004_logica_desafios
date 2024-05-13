// 4. Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.
let n1 = 2;
let n2 = 10;

console.log(`A soma de ${n1} e ${n2} é ${n1 + n2}!`);

// 5. Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.
let str1 = prompt('Digite uma frase:');
let str2 = prompt('Digite outra frase:');

let str1_2 = str1.split(';');
let str2_2 = str2.split(';');

console.log(str1_2);
console.log(str2_2);

// 6. Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.
let str3 = prompt('Digite uma frase com números separados por vírgula:');
let str3_2 = str3.split(',');

console.log(str3_2);
