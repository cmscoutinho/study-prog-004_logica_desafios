let amigos = [];

function adicionar() {
  let nome = document.getElementById('nome-amigo').value;
  amigos.push(nome);

  document.getElementById('lista-amigos').textContent = amigos;
}

function sortear() {
  if (amigos.length % 2 == 0) {
  } else {
    alert('É preciso um número par de amigos!');
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById('nome-amigo').value = '';
  document.getElementById('lista-amigos').textContent = '';
}
