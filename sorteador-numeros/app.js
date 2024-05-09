let quantidade;
let de;
let ate;

// let botaoSorteio = document.getElementById();

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

function sortear() {
  quantidade = parseInt(document.getElementById("quantidade").value);
  de = parseInt(document.getElementById("de").value);
  ate = parseInt(document.getElementById("ate").value);

  if (isValid(quantidade, de, ate)) {
    console.log(`Irei sortear ${quantidade} números.`);
    for (let i = 0; i < quantidade; i++) {
      console.log(parseInt(Math.random() * ate + 1));
    }
  } else {
    console.log("Valor inválido!");
  }
}
