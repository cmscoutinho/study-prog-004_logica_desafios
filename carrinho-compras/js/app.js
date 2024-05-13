let total = 0;
limpar();

// Claudio's version
// function adicionar() {
//   let caixa = document.getElementById('produto');
//   let item = caixa[caixa.selectedIndex].value;
//   let preco = parseInt(item.slice(item.search(/\$/) + 1));
//   let nomeProduto = item.slice(0, item.search(/-/) - 1);

//   let quantidade = parseInt(document.getElementById('quantidade').value);
//   total += quantidade * preco;
//   //   alert(`${quantidade}x ${nomeProduto} por ${preco}`);

//   let carrinho = document.getElementById('lista-produtos');
//   let lista = carrinho.querySelector('.carrinho__produtos__produto');
//   lista.innerHTML += `<br><span class='texto-azul'>${quantidade}x</span>\n ${nomeProduto} \n<span class='texto-azul'>R\$${preco}</span>`;

//   document.getElementById('valor-total').innerHTML = `R\$ ${total}`;
// }

// Alura's version
function adicionar() {
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let preco = parseInt(produto.split('R$')[1]);

  let quantidade = parseInt(document.getElementById('quantidade').value);
  // 1. Adicione validações no código para garantir que o usuário só consiga adicionar produtos ao carrinho se tiver selecionado um produto válido e inserido uma quantidade válida. Se a entrada não for válida, exiba uma mensagem de erro apropriada.
  if (isNaN(quantidade) || quantidade < 1) {
    alert('Quantidade inválida!');
    return;
  }
  total += quantidade * preco;

  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;

  document.getElementById('valor-total').textContent = `R\$ ${total}`;
  document.getElementById('quantidade').value = 0;
}

function limpar() {
  total = 0;
  document.getElementById('valor-total').textContent = `R\$${total}`;

  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = '';
}
