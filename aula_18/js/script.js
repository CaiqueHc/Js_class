function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade

        /* 
        ou ao invés de setar um atributo a uma variavel pode fazer da seguinte forma:
                return {nome, sobrenome, idade};
        desta forma o JS entende que nome está atribuindo a variavel nome e assim por diante
         */
    };
}

const pessoa1 = criaPessoa("Kiti", "Komy", 4963);
console.log(pessoa1);