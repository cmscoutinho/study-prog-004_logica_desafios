// 3. Tenha um elemento HTML na página (por exemplo, um parágrafo) e utilize JavaScript para modificar seu conteúdo usando a propriedade textContent.
function alterar() {
  let texto = prompt('Qual texto deseja inserir?');
  let paragrafo = document.getElementById('paragrafo-texto');
  paragrafo.textContent = texto;
}
