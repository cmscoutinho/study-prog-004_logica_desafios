function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  let sorteados = [];
  let numero;

  if (isValid(quantidade, de, ate)) {
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
  } else {
    console.log("Valor inválido!");
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
