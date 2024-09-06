const a = {
    nome: 'nome',
    sobrenome: 'sobrenome'
};

const b = {...a}; // aqui copio o objeto, se não fazer assim (b = a), fará com que o obj aponto ao objeto A, se tornando referência 

a.nome = 'nome2';

console.log(a);
console.log(b);