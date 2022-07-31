const input = document.getElementById('input');
const botaoEscrever = document.getElementById('botao-escrever');
const boxNumeros = document.getElementById('box-container');
const numeros = document.getElementById('numeros');
const rodape = document.getElementById('botoes');

const escreveNaTelaNumerosRange = () => {
    numeros.innerText = 'Carregando...';
    let num = parseInt(input.value);

    setTimeout(() => {
        numeros.innerText = '';
        
        for (let i = 0; i < num; i++) {
            switch (i) {
                case 0:
                    numeros.innerText += `${numerosPorExtenso[i]} --`;
                    break;
                case num - 1:
                    numeros.innerText += ` ${numerosPorExtenso[i]}.`;
                    break;
                default:
                    numeros.innerText += ` ${numerosPorExtenso[i]} --`;
                    break;
            };
        };
    }, 1000);
};

const inputKeyShow = () => {
    if (parseInt(input.value) > 1000){
        input.value = '';
        window.alert('Digite um número válido!');
    };
    escreveNaTelaNumerosRange();
};

const range = (inicio, fim) => {
    numeros.innerText = '';

    for (let i = inicio; i < fim; i++) {
        switch (i) {
            case inicio:
                numeros.innerText += `${numerosPorExtenso[i]} --`;
                break;
            case fim - 1:
                numeros.innerText += ` ${numerosPorExtenso[i]}.`;
                break;
            default:
                numeros.innerText += ` ${numerosPorExtenso[i]} --`;
                break;
        };
    };
};

const numerosPreSet = (e) => {
    numeros.innerText = 'Carregando...';
    let botaoPreSet = e.target.id;
    setTimeout(() => {
        numeros.innerText = '';
        switch (botaoPreSet) {
            case 'vinte':
                range(0, 20);
                break;
            case 'cem':
                range(20, 100);
                break
            case 'mil':
                setTimeout(() => {range(100, 1000);}, 1000);
                break;
        };
    }, 1000);
};

botaoEscrever.addEventListener('click', inputKeyShow);
input.addEventListener('click', inputKeyShow);
input.addEventListener('keyup', inputKeyShow);
rodape.addEventListener('click', numerosPreSet);
