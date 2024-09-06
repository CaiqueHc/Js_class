const aluno = ['Fabio', 'João', 'Maria'];

console.log(aluno);

aluno.push('Dunha'); //adiciona no final

console.log(aluno);

aluno.unshift('Pedro'); // acrescenta no inicio

console.log(aluno);

const removido = aluno.pop(); // retira o ultimo elemento e salva na variavel o que foi retirado
const removido2 = aluno.shift(); // retira o primeiro elemento e salva na variavel o que foi retirado

console.log(`Valor removido do array: ${removido}`);
console.log(`Valor removido do array: ${removido2}`);

console.log(`Fatiando o array: ${aluno.slice(0, 2)}`); // Fatiei o array e deixei só dois elementos
console.log(`Verificando se o array é um array: ${aluno instanceof Array}`); // array sempre é um objeto mas se precisar validar se é array tem que validar pela função de instância

console.log(`Deletando um elemento especifico em uma determinada posição: ${delete aluno[1]} -> ${aluno}`);