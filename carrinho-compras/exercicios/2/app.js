// 2. Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.

function welcome() {
  //   console.log('func');
  let nome = document.getElementById('input-name').value;
  let idade = document.getElementById('input-age').value;

  console.log(`Bem-vindo(a), ${nome}! Você tem ${idade} anos.`);

  document.getElementById(
    'section-welcome'
  ).innerHTML = `<h1>Bem-vindo(a), ${nome}! Você tem ${idade} anos.`;
}
