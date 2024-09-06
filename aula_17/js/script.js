function saudacao(nome = 'Desconhecido') {
    return `Bom dia, ${nome}!`;
}

const ret = saudacao('Banha');
console.log(ret);
console.log(saudacao()); // envio valor vazio mas defino que o default é 'Desconhecido'



// uma função que é chamada pelo nome da variavel, não tem nome definido mas funciona
const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(4));



// arrow functions
const soma = (n, m) => n + m;

console.log(soma(1, 2));