let mensaje = document.querySelector('#texto-sin-encriptar');
let mensaje_encriptado = document.querySelector('#texto-encriptado');
let imgSearch = document.querySelector('.imagen-muneco');
let parrafoError = document.querySelector( '.parrafo');

let matriz_clave = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function limpiarCaja() {
    document.querySelector('#texto-sin-encriptar').value = '';
}

function mostrarError() {
    imgSearch.setAttribute("style","display:block;");
    parrafoError.setAttribute("style","display:block;");
}

function ocultarError(){
    imgSearch.setAttribute("style","display:none;");
    parrafoError.setAttribute("style","display:none;");   
}

function mostrarResultado() {
    let btnCopiar = document.getElementById('btn-copiar');
    btnCopiar.setAttribute("style","display:block;");
    let txtCajaEncriptado = document.getElementById('texto-encriptado');
    txtCajaEncriptado.setAttribute("style","display:block;");
}

function ocultarBotonCopiar() {
    let btnCopiar = document.getElementById('btn-copiar');
    btnCopiar.setAttribute("style","display:none;");
}

function ocultarCajaResultado() {
    let txtCajaEncriptado = document.getElementById('texto-encriptado');
    txtCajaEncriptado.setAttribute("style","display:none;");
}

function btnCopiarResultado() {
    let texto = document.getElementById('texto-encriptado').innerHTML;
    navigator.clipboard.writeText(texto)
        .then(() => {
        console.log('Contenido copiado al portapapeles');
        /* Resuelto - texto copiado al portapapeles con éxito */
        },() => {
        console.error('Error al copiar');
        /* Rechazado - fallo al copiar el texto al portapapeles */
        });
}

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
    if (texto.length == 0) {
        ocultarCajaResultado();
        ocultarBotonCopiar();
        mostrarError();
    }else{
        ocultarError();
        mensaje_encriptado.innerHTML = encriptar(texto.toLowerCase());
        limpiarCaja();
        mostrarResultado();
    }
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
    if (texto.length == 0) {
        ocultarCajaResultado();
        ocultarBotonCopiar();
        mostrarError();
    }else{
        ocultarError();
        mensaje_encriptado.innerHTML = desencriptar(texto.toLowerCase());
        limpiarCaja();
        mostrarResultado();
    }
}