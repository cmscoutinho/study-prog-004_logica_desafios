function comprar() {
  let tipoIngresso = document.getElementById('tipo-ingresso').value;
  let quantidade = parseInt(document.getElementById('qtd').value);

  if (!tipoIngresso || tipoIngresso.trim() === '') {
    alert('Produto inválido!');
    return;
  }

  if (isNaN(quantidade) || quantidade < 0) {
    alert('Quantidade inválida!');
    return;
  }

  let elementoId;

  if (tipoIngresso == 'inferior') {
    elementoId = 'qtd-inferior';
  } else if (tipoIngresso == 'superior') {
    elementoId = 'qtd-superior';
  } else if (tipoIngresso == 'pista') {
    elementoId = 'qtd-pista';
  } else {
    alert('Tipo inválido!');
    return;
  }

  let elementoQuantidade = document.getElementById(elementoId);
  let elementoText = parseInt(elementoQuantidade.textContent);
  let quantidadeFinal = elementoText - quantidade;

  if (quantidadeFinal >= 0) {
    elementoQuantidade.textContent = quantidadeFinal;
  } else {
    alert('Quantidade escolhida excede quantidade disponível!');
  }
}
