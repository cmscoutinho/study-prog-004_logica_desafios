let total = 0;

function adicionar() {
  let caixa = document.getElementById("produto");
  let item = caixa[caixa.selectedIndex].value;
  let preco = parseInt(item.slice(item.search(/\$/) + 1));
  let nome = item.slice(0, item.search(/-/) - 1);

  let quantidade = parseInt(document.getElementById("quantidade").value);
  total += quantidade * preco;
  //   alert(`${quantidade}x ${nome} por ${preco}`);

  let carrinho = document.getElementById("lista-produtos");
  let lista = carrinho.querySelector(".carrinho__produtos__produto");
  lista.innerHTML += `<br><span class='texto-azul'>${quantidade}x</span>\n ${nome} \n<span class='texto-azul'>R\$${preco}</span>`;

  document.getElementById("valor-total").innerHTML = `R\$${total}`;
}

function limpar() {
  total = 0;
  document.getElementById("valor-total").innerHTML = `R\$${total}`;

  let carrinho = document.getElementById("lista-produtos");
  let lista = carrinho.querySelector(".carrinho__produtos__produto");
  lista.innerHTML = "";
}
