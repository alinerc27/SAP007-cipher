import cipher from './cipher.js';

//console.log(cipher);
//index.js manipula o dom


//Guarda valor que botão encode manda
const buttonEncode = document.getElementById("encodeSend"); 

//Guarda valor que botão decode manda
const buttonDecode = document.getElementById("decodeSend");

function encodeSend (e) {
    //bloqueia comportamento padrão
    e.preventDefault();

    //let porque são valores sempre mutaveis
    let offset = Number(document.getElementById("offset").value);
    let string = document.getElementById("textEncode").value;
    //valor recebido de funcao cipher precisa ser const
    const letraCifrada = cipher.encode(offset,string);
    document.getElementById ("answerEncode").innerHTML = letraCifrada;

//    document.getElementById ("textDecode").innerHTML = letraCifrada;
//tentar deixar ele preenchendo o placeholder com o valor que vem da cipher
}

function decodeSend (e) {
    //bloqueia comportamento padrão
    e.preventDefault();

    //let porque são valores sempre mutaveis
    let offset = Number(document.getElementById("offset").value);
    let string = document.getElementById("textDecode").value;
    //valor recebido de funcao cipher precisa ser const
    const letraDecifrada = cipher.decode(offset,string);
    document.getElementById ("answerDecode").innerHTML = letraDecifrada;
}

//o click do botão devolve a resposta pro html
buttonEncode.addEventListener ("click", encodeSend);
buttonDecode.addEventListener ("click", decodeSend);