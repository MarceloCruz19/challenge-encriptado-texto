const textArea = document.querySelector(".text__area");
const mensaje = document.querySelector(".text__area__mensaje");
const botonCopia = document.querySelector(".boton__copiar");

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    botonCopia.style.display = "inline";
}

function encriptar(encripta){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encripta = encripta.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(encripta.includes(matrizCodigo[i][0])){
            encripta = encripta.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return encripta;
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    botonCopia.style.display = "inline";
}

function desencriptar(desencripta){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    desencripta = desencripta.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(desencripta.includes(matrizCodigo[i][1])){
            desencripta = desencripta.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return desencripta;
}

function botonCopiar(){
    navigator.clipboard.writeText(mensaje.value);
}
