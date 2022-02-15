/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

const inputTexto = document.getElementById("input-texto");
const botaoCriptografar = document.getElementById("btn-cripto");
const botaoDescriptografar = document.getElementById("btn-descripto");
const outputCodigo = document.getElementById("output-texto");
const botaoCopiar = document.getElementById("btn-copy");

inputTexto.focus();

//função bloqueia caracteres especiais e letras maiúsculas
function checaCaractere(e) {
    let caractere = String.fromCharCode(e.keyCode);
    let padrao = "[a-zç0123456789 ]";

    if(caractere.match(padrao)){
        return true;
    }
}

//função checa se foi digitado caractere especial ou letra maiúscula
inputTexto.addEventListener("keypress", function (e) {
   if(!checaCaractere(e)){
       e.preventDefault();
       alert("Apenas letras minúsculas e sem acentuação!");
       inputTexto.value = "";
   }
});

//função criptografa o texto
function codificaTexto() {
    let texto = inputTexto.value;
    let textoCodificado = texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")

    outputCodigo.value = textoCodificado;
}

//botão criptografar
botaoCriptografar.addEventListener("click", function (e) {
    e.preventDefault();
    codificaTexto();
    inputTexto.value = "";
})

//função descriptografar
function decodificaTexto() {
    let texto = inputTexto.value;
    let textoDecodificado = texto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")

    outputCodigo.value = textoDecodificado;
}

//botão descriptografar
botaoDescriptografar.addEventListener("click", function (e) {
    e.preventDefault();
    decodificaTexto();
    inputTexto.value = "";
})

//botão copiar
botaoCopiar.addEventListener("click", function(e){
    e.preventDefault();
    let texto = document.querySelector("#output-texto");
    navigator.clipboard.writeText(texto.value);
    texto.value = "";
})


