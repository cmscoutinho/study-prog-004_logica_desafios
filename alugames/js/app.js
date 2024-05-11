let numJogosAlugados = 0;

function alterarStatus(item) {
  let li = document.getElementById(`game-${item}`);
  //   let div = li.children.item(0);
  let div = li.querySelector(".dashboard__item__img");
  //   let a = li.children.item(2);
  let a = li.querySelector(".dashboard__item__button");
  let nomeJogo = li.querySelector(".dashboard__item__name").textContent;

  if (div.classList.contains("dashboard__item__img--rented")) {
    div.classList.remove("dashboard__item__img--rented");
    a.classList.remove("dashboard__item__button--return");
    // a.innerHTML = "Alugar";
    a.textContent = "Alugar";
    alert(`Jogo ${nomeJogo} devolvido!`);
  } else {
    div.classList.add("dashboard__item__img--rented");
    a.classList.add("dashboard__item__button--return");
    // a.innerHTML = "Devolver";
    a.textContent = "Devolver";
    numJogosAlugados++;
    exibeJogosAlugados();
  }
}

function exibeJogosAlugados() {
  console.log(`Total de aluguéis: ${numJogosAlugados}`);
}
