// 2. Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável. Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista. Imprima novaLista no console.
let minhaLista = [1, 2, 3];
let outraLista = [4, 5, 6];
let novaLista = minhaLista.concat(outraLista);
console.log(novaLista);

// 3. Remova o último elemento de novaLista. Imprima novaLista após a remoção.
novaLista.pop();
console.log(novaLista);

// 4. Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.
function fisherYates(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    // guarda de um índice aleatório da lista
    const elemento = lista[indice - 1];

    lista[indice - 1] = lista[indiceAleatorio];

    lista[indiceAleatorio] = elemento;
  }
}

novaLista = fisherYates(novaLista);
console.log(novaLista);

// 5. Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. Teste a função com novaLista e imprima o array resultante.
function removerDuplicatas(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

novaLista = removerDuplicatas(novaLista);
console.log(novaLista);
