function main() {
    const form = document.querySelector(".form");
    const resultadoF = document.querySelector(".result-false");
    const resultadoV = document.querySelector(".result-true");

    function eventoForme(evento) {
        evento.preventDefault();
        const peso = Number((form.querySelector(".peso")).value);
        const altura = Number((form.querySelector(".altura")).value);
        let resultadoIMC = 0.0;

        if (!peso) {
            resultadoF.innerHTML = "O peso deve ser um número";
            return;
        };
        if (!altura) {
            resultadoF.innerHTML = "A altura deve ser um número";
            return;
        };
        if ((typeof (parseFloat(peso)) === "number" && typeof (parseFloat(altura)) === "number")) {
            resultadoF.innerHTML = ""
            resultadoIMC = doIMC(peso, altura);

            console.log()
            if (resultadoIMC < 18.5) {
                resultadoV.innerHTML = `Seu IMC é ${resultadoIMC} (Abaixo do peso)`
            } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
                resultadoV.innerHTML = `Seu IMC é ${resultadoIMC} (Peso Normal)`
            } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
                resultadoV.innerHTML = `Seu IMC é ${resultadoIMC} (Peso Sobrepeso)`
            } else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
                resultadoV.innerHTML = `Seu IMC é ${resultadoIMC} (Obesidade Grau 1)`
            } else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
                resultadoV.innerHTML = `Seu IMC é ${resultadoIMC} (Obesidade Grau 2)`
            } else if (resultadoIMC >= 40) {
                resultadoV.innerHTML = `Seu IMC é ${resultadoIMC} (Obesidade Grau 3)`
            }
        };
    }

    function doIMC(pesoF = 1, alturaF = 1) {
        pesoF = parseFloat(pesoF);
        alturaF = parseFloat(alturaF);
        return ((pesoF / (alturaF * alturaF)).toFixed(3));
    }

    form.addEventListener("submit", eventoForme);
}

main();
