const elemento = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elemento.length; i++) {
    let { tag, texto } = elemento[i];
    let elementoCriado = document.createElement(tag);
    elementoCriado.innerHTML = texto;
    div.appendChild(elementoCriado);
}

container.appendChild(div)