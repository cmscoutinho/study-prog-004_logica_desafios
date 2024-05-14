let amigos = [];

function adicionar() {
  let nome = document.getElementById('nome-amigo').value;
  amigos.push(nome);

  document.getElementById('lista-amigos').textContent = amigos;
}

function sortear() {
  if (amigos.length % 2 == 0) {
    let ordem = randperm(0, amigos.length - 1);
    let resultado = document.getElementById('lista-sorteio');
    resultado.textContent = '';

    for (let i = 0; i < amigos.length; i += 2) {
      resultado.textContent += `${amigos[ordem[i]]} -> ${
        amigos[ordem[i + 1]]
      }\n\n`;
    }
  } else {
    alert('É preciso um número par de amigos!');
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById('nome-amigo').value = '';
  document.getElementById('lista-amigos').textContent = '';
  document.getElementById('lista-sorteio').textContent = '';
}

function randperm(min, max) {
  let arr = [];
  let numero;
  let qty = max - min;

  while (arr.length <= qty) {
    do {
      numero = parseInt(Math.random() * (max - min + 1) + min);
    } while (arr.includes(numero));

    arr.push(numero);
  }
  return arr;
}
