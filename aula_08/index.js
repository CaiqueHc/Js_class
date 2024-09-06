const cNome = 'Kiti';
const cSobrenome = 'Kutuka Emela';
const nIdade = 478;
const nPeso = 458;
const nAltura = 2.99;
const nAnoAtual = 2024;

let nImc = nPeso / (nAltura * nAltura);
let nAnoNascimento = nAnoAtual - nIdade;

console.log(cNome, cSobrenome, 'tem', nIdade, 'anos, pesa', nPeso, 'toneladas e nasceu em', nAnoNascimento);
console.log('Tem', nAltura + ' metros de altura e seu IMC é de', nImc);