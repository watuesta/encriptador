let mensaje = document.querySelector('#texto-sin-encriptar');
let mensaje_encriptado = document.querySelector('#texto-encriptado');

function limpiarCaja() {
    document.querySelector('#texto-sin-encriptar').value = '';
}

let matriz_clave = [
    ["a", "#/("],
    ["e", "?)|"],
    ["i", "!¿¡"],
    ["o", "@=&"],
    ["u", "*%$"],
];

function encriptar(frase) {
    for (let i = 0; i < matriz_clave.length; i++) {
        if (frase.includes(matriz_clave[i][0])) {
            frase = frase.replaceAll(matriz_clave[i][0], matriz_clave[i][1]);
        }
    }
    return frase;
}

function btnEncriptar(){
    let texto = mensaje.value;
    mensaje_encriptado.innerHTML = encriptar(texto.toLowerCase());
    limpiarCaja();
}

function desencriptar(frase) {
    for (let i = 0; i < matriz_clave.length; i++) {
        if (frase.includes(matriz_clave[i][1])) {
            frase = frase.replaceAll(matriz_clave[i][1], matriz_clave[i][0]);
        }
    }
    return frase;
}

function btnDesencriptar(){
    let texto = mensaje.value;
    mensaje_encriptado.innerHTML = desencriptar(texto.toLowerCase());
    limpiarCaja();
}