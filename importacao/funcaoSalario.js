const entradas = [2000, 250];
let i = 0;

function gets(){
    const valor = entradas[i];
    i = i + 1;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };