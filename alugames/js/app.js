function alterarStatus(item) {
  let li = document.getElementById(`game-${item}`);
  let div = li.children.item(0);
  let a = li.children.item(2);

  if (div.classList.contains("dashboard__item__img--rented")) {
    div.classList.remove("dashboard__item__img--rented");
    a.classList.remove("dashboard__item__button--return");
    a.innerHTML = "Alugar";
  } else {
    div.classList.add("dashboard__item__img--rented");
    a.classList.add("dashboard__item__button--return");
    a.innerHTML = "Devolver";
  }
}
