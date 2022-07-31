const unidades = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
const dezenaDez = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
const dezenas = ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
const centenas = ['cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

const numerosPorExtenso = []

function numerosAteVinteExt() {
    unidades.forEach(numero => {
        numerosPorExtenso.push(numero);
    });
    dezenaDez.forEach(numero => {
        numerosPorExtenso.push(numero);
    });
};

function numerosVinteAteCemExt() {
    for (let i = 0; i < dezenas.length; i++) {
        numerosPorExtenso.push(dezenas[i]);
        unidades.forEach(numero => {
            numerosPorExtenso.push(`${dezenas[i]} e ${numero}`)
        });
    };
};

function numerosCemAteMilExt() {
    for (let c = 0; c < centenas.length; c++){
        numerosPorExtenso.push(`${centenas[c]}`)
        unidades.forEach(numero => {
            numerosPorExtenso.push(`${centenas[c]} e ${numero}`);
        });
        dezenaDez.forEach(numero => {
            numerosPorExtenso.push(`${centenas[c]} e ${numero}`);
        });
        for (let i = 0; i < dezenas.length; i++) {
            numerosPorExtenso.push(`${centenas[c]} e ${dezenas[i]}`);
            unidades.forEach(numero => {
                numerosPorExtenso.push(`${centenas[c]} e ${dezenas[i]} e ${numero}`);
            });
        };
    };
    numerosPorExtenso[99] = 'cem';
    numerosPorExtenso[999] = 'mil';
};

numerosAteVinteExt();
numerosVinteAteCemExt();
numerosCemAteMilExt();
