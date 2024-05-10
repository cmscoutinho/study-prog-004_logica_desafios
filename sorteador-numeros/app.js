function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  let sorteados = [];
  let numero;

  if (isValid(quantidade, de, ate)) {
    if (de > ate) {
      alert("Número inicial não pode ser maior que número final!");
      return;
    }

    let intervalo = ate - de + 1;
    if (quantidade > intervalo) {
      alert(
        "É preciso que o intervalo seja maior ou igual à quantidade de números!"
      );
    } else {
      console.log(`Irei sortear ${quantidade} números.`);
      for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
          numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
      }
      let resultado = document.getElementById("resultado");
      resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
      alternarStatusBotaoReiniciar();
    }
  } else {
    console.log("Campo vazio!");
  }
}

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  alternarStatusBotaoReiniciar();
}

function alternarStatusBotaoReiniciar() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.add("container__botao-desabilitado");
    botao.classList.remove("container__botao");
  }
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isValid(quantidade, de, ate) {
  let error =
    quantidade === "" ||
    quantidade === undefined ||
    isNaN(quantidade) ||
    de === "" ||
    de === undefined ||
    isNaN(de) ||
    ate === "" ||
    ate === undefined ||
    isNaN(ate);

  return !error;
}
