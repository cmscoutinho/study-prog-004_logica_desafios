let amigos = [];

function adicionar() {
  let nome = document.getElementById('nome-amigo');
  if (nome.value != '' && !amigos.includes(nome.value)) {
    amigos.push(nome.value);
    atualizaLista();
    nome.value = '';
  } else {
    alert('Digite um nome válido e não repetido!');
  }
}

function atualizaLista() {
  let listaAmigos = document.getElementById('lista-amigos');
  listaAmigos.innerHTML = '';
  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<span onclick=excluirAmigo("${i}")>${amigos[i]}</span>`;
    if (i < amigos.length - 1) listaAmigos.innerHTML += ',';
  }
}

function atualizarSorteio() {
  document.getElementById('lista-sorteio').innerHTML = '';
}

function excluirAmigo(idx) {
  amigos.splice(idx, 1);
  atualizaLista();
  atualizarSorteio();
}

function sortear() {
  if (amigos.length >= 4) {
    amigos = embaralhar(amigos);
    let resultado = document.getElementById('lista-sorteio');
    resultado.textContent = '';

    for (let i = 0; i < amigos.length; i++) {
      resultado.innerHTML += `${amigos[i]} -> ${
        amigos[(i + 1) % amigos.length]
      } <br>`;
    }
  } else {
    alert('É preciso um número de amigos maior ou igual a 4!');
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById('lista-amigos').textContent = '';
  atualizarSorteio();
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
