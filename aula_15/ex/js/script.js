const numero = Number(prompt("Digite um número: "));
const numetoTitulo = document.getElementById('numero-titulo');
const textoDiv = document.getElementById('texto');

numetoTitulo.innerHTML = numero;
textoDiv.innerHTML = '';
textoDiv.innerHTML +=  `<p> Raíz quadrada: ${Math.sqrt(numero)}</p>`;
textoDiv.innerHTML += `<p> É NaN: ${isNaN(numero)}</p>`;
textoDiv.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger()}</p>`;
textoDiv.innerHTML += `<p> Arredondado para baixo: ${Math.floor(numero)}</p>`;
textoDiv.innerHTML += `<p> Arredondado para cima: ${Math.ceil(numero)}</p>`;
textoDiv.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}</p>`;

