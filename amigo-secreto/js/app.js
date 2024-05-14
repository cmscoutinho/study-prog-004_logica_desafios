let amigos = [];

function adicionar() {
  let nome = document.getElementById('nome-amigo');
  if (nome.value != '') {
    amigos.push(nome.value);
    document.getElementById('lista-amigos').textContent = amigos;
    nome.value = '';
  } else {
    alert('Digite um nome válido!');
  }
}

function sortear() {
  if (amigos.length % 2 == 0) {
    amigos = embaralhar(amigos);
    let resultado = document.getElementById('lista-sorteio');
    resultado.textContent = '';

    for (let i = 0; i < amigos.length; i += 2) {
      resultado.textContent += `${amigos[i]} -> ${amigos[i + 1]}\n\n`;
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

function embaralhar(amigos) {
  let arr = [];
  let amigosRes = [];
  let numero;
  let qty = amigos.length;

  while (arr.length < qty) {
    do {
      numero = parseInt(Math.random() * qty);
    } while (arr.includes(numero));

    arr.push(numero);
    amigosRes[arr.length - 1] = amigos[arr[arr.length - 1]];
  }
  return amigosRes;
}
