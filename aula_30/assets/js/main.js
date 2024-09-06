// function seekDay(anyDay) {
//     if (anyDay === 0) return 'Domingo';
//     if (anyDay === 1) return 'Segunda-Feira';
//     if (anyDay === 2) return 'Terça-Feira';
//     if (anyDay === 3) return 'Quarta-Feira';
//     if (anyDay === 4) return 'Quinta-Feira';
//     if (anyDay === 5) return 'Sexta-Feira';
//     if (anyDay === 6) return 'Sábado';
// };

// function seekMonth(numeroMes) {
//     if (numeroMes === 1) return 'Janeiro';
//     if (numeroMes === 2) return 'Fevereiro';
//     if (numeroMes === 3) return 'Março';
//     if (numeroMes === 4) return 'Abril';
//     if (numeroMes === 5) return 'Maio';
//     if (numeroMes === 6) return 'Julho';
//     if (numeroMes === 7) return 'Junho';
//     if (numeroMes === 8) return 'Agosto';
//     if (numeroMes === 9) return 'Setebro';
//     if (numeroMes === 10) return 'Outubro';
//     if (numeroMes === 11) return 'Novembro';
//     if (numeroMes === 12) return 'Dezembro';
// };

// function zeroEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// };

// function creatString() {
//     const data = new Date();
//     const textoHtml = document.querySelector('#paragrafo');
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     console.log(numeroMes);

//     textoHtml.innerHTML = `${seekDay(diaSemana)}, ${data.getDate()} de ${seekMonth(numeroMes)} de ${data.getFullYear()}, `;
//     textoHtml.innerHTML += `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`;
// };

// creatString();

const textoHtml = document.querySelector('#paragrafo');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    //timeStyle: 'short'
};

textoHtml.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: "full",/* timeStyle: "medium" -> erro */});