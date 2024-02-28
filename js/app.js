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
        swal({
            title: "Error!",
            text: "Debes ingresar el texto a encriptar",
            icon: "error",
            button: "Volver a intentar"
          });
    }else{
        ocultarError();
        mensaje_encriptado.innerHTML = encriptar(texto.toLowerCase());
        limpiarCaja();
        mostrarResultado();
        swal("Encriptación correcta", "Tu texto ha sido encriptado correctamente", "success");
    }
}

function desencriptar(frase) {
    matriz_clave.reverse();
    for (let i = 0; i < matriz_clave.length; i++) {
        if (frase.includes(matriz_clave[i][1])) {
            frase = frase.replaceAll(matriz_clave[i][1], matriz_clave[i][0]);
            console.log(frase);
        }
    }
    matriz_clave.reverse();
    return frase;
}

function btnDesencriptar(){
    let texto = mensaje.value;
    if (texto.length == 0) {
        ocultarCajaResultado();
        ocultarBotonCopiar();
        mostrarError();
        swal({
            title: "Error!",
            text: "Debes ingresar el texto a desencriptar",
            icon: "error",
            button: "Volver a intentar"
          });
    }else{
        ocultarError();
        mensaje_encriptado.innerHTML = desencriptar(texto.toLowerCase());
        limpiarCaja();
        mostrarResultado();
        swal("Desencriptación correcta", "Tu texto ha sido desencriptado correctamente", "success");
    }
}

function autoLower(e) {
    let tecla = e.value;
    let teclaLower = tecla.toLowerCase();

    return document.querySelector('#texto-sin-encriptar').value = teclaLower;
}