var btnCriptografar = document.getElementById("btn-cripto");
var btnDescriptografar = document.getElementById("btn-descripto");
var btncopy = document.getElementById("btn-copy");

function criptografar() {
  var inserirTexto = document.querySelector("#input-texto").value;
  var textoCriptografado = "";

  textoCriptografado = inserirTexto
    .replace("a", "ai")
    .replace("e", "enter")
    .replace("i", "imes")
    .replace("o", "ober")
    .replace("u", "ufat");

  var mensagem = document.querySelector("#msg");
  mensagem.value = textoCriptografado;
}

function descriptografar() {
  var inserirTexto = document.querySelector("#input-texto").value;
  var textoDescriptografado = "";

  textoDescriptografado = inserirTexto
    .replace("ai", "a")
    .replace("enter", "e")
    .replace("imes", "i")
    .replace("ober", "o")
    .replace("ufat", "u");

  var mensagem = document.querySelector("#msg");
  mensagem.value = textoDescriptografado;
}

btncopy.addEventListener("click", function (event) {
  var textoCopiado = document.querySelector("#msg");
  navigator.clipboard.writeText(textoCopiado.value);
  textoCopiado.value = "";
});

/* Regras Codificador:
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/
