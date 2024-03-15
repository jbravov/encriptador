// Desarollo de Challenge 
// Programación G6 - ONE
// Alumno : Joel Bravo Vega
// Fecha : 15/03/2024
// Definición de reglas para encriptar
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"
// Diagrama de construcción
//https://caelum-online-public.s3.amazonaws.com/oracle-one-fase2/1._ESP_Challenge_-_Encriptador_vfinal_1.pdf

// Definicion de variables

const figura = document.querySelector("#fig");
const parrafo = document.querySelector(".contenedor-parrafo");
const inputText = document.querySelector('.caja-texto');
const resultado = document.querySelector(".contenedor-resultado");
const txt_res = document.querySelector(".texto-resultado");
const btn_encriptar = document.querySelector(".btn-encriptar");
const btn_desencriptar = document.querySelector(".btn-desencriptar");
const copiar = document.querySelector(".btn-copiar");


const sustitucionesEncriptar = [
    { original: 'e', encriptado: 'enter' },
    { original: 'i', encriptado: 'imes' },
    { original: 'a', encriptado: 'ai' },
    { original: 'o', encriptado: 'ober' },
    { original: 'u', encriptado: 'ufat' }
];

const sustitucionesDesencriptar = [
    { original: 'ai', encriptado: 'a' },
    { original: 'enter', encriptado: 'e' },
    { original: 'imes', encriptado: 'i' },
    { original: 'ober', encriptado: 'o' },
    { original: 'ufat', encriptado: 'u' }
];



btn_encriptar.addEventListener("click", () => {
    txt_res.value = encriptar(inputText.value);
});

btn_desencriptar.addEventListener("click", () => {
    txt_res.value = desencriptar(inputText.value);
});

copiar.addEventListener('click', function() {
    const copia = document.querySelector(".texto-resultado").value;
    navigator.clipboard.writeText(copia)
        .then(() => {
            alert('El texto se ha copiado');
        }).catch((error) => {
            console.error('Error al copiar el texto:', error);
        });
        limpiar_texto();
});

function limpiar_texto() {
    txt_res.value = "";
    resultado.classList.add("ocultar")
}

function validad_texto() {
    // Definicion de reglar
    // El campo no debe estar vacío
    // El texto no debe ser con letras mayúsculas
    // El texto no debe tener letras con acentos y/o caracteres especiales

    if (inputText.value === "") {
        alert("El campo de texto no puede estar vacio");
        return false;
    }    
    if (/[A-Z]/.test(inputText.value)) {
        alert("El campo de texto no puede contener mayúsculas");
        return false;
    }

    if (/[áéíóú]/.test(inputText.value)) {
        alert("El campo de texto no puede contener acentos");
        return false;
    }


    if (/[!@#$%^&*(),.?":{}|<>]/.test(inputText.value)) {
        alert("El campo de texto no puede contener caracteres especiales");
        return false;
    }

}

function error(){
    figura.classList.remove("ocultar");
    parrafo.classList.remove("ocultar");    
    copiar.classList.add("ocultar");
    resultado.classList.add("ocultar");
}


function encriptar(texto) {
    if (validad_texto() === false) {
        error();
        return "";
    }

    let txtCifrado = texto;
    sustitucionesEncriptar.forEach(sustitucion => {
        const regex = new RegExp(sustitucion.original, 'igm');
        txtCifrado = txtCifrado.replace(regex, sustitucion.encriptado);
    });
    ocultar();
    return txtCifrado;
}

function desencriptar(texto) {
    if (validad_texto() === false) {
        error();
        return "";
    }

    let txtCifrado = texto;
    sustitucionesDesencriptar.forEach(sustitucion => {
        const regex = new RegExp(sustitucion.original, 'igm');
        txtCifrado = txtCifrado.replace(regex, sustitucion.encriptado);
    });
    ocultar();
    return txtCifrado;
}


function ocultar(){
    figura.classList.add("ocultar");
    parrafo.classList.add("ocultar");    
    copiar.classList.remove("ocultar");
    resultado.classList.remove("ocultar");
}

