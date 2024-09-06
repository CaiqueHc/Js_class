function meuEscopo() {
    const form = document.querySelector('.form'); // estou pegando o form através de classe
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert('entrou');
    //     console.log('entrou');
    // };

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');


        pessoas.push([nome.value, sobrenome.value, altura.value, peso.value]);
        console.log(pessoas);
        resultado.innerHTML += `<p><strong>${nome.value}` +
            ` ${sobrenome.value}` +
            ` ${altura.value}` +
            ` ${peso.value}</strong></p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();