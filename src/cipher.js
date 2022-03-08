const cipher = {
  encode: function (offset, string){

    if (typeof offset != 'number' || typeof string != 'string'){
      throw new TypeError();
    }

//criar if caso offset maior que 26

  let answerEncode = "";
    
  for (let i=0; i < string.length; i++){  
     let encoding = string.toUpperCase().charCodeAt(i);
      
     if (encoding >= 65 && encoding <=90){         
      encoding = (((encoding - 65) + offset) % 26) + 65;
    
    } 
    
    //.toUpperCase() corrigiu a possibilidade de ser minuscula
    // proxima fase tratar caracteres especiais
    //if (encoding < 65 && encoding > 90){
    //  encoding = ((encoding - 97 + offset) % 26) + 97;
    //} 

    else if (encoding == 32) {
      encoding = encoding + string.charAt(i);
    } 
    answerEncode += String.fromCharCode(encoding);
  } 
  return answerEncode;
},

decode: function (offset, string){

  if (typeof offset != 'number' || typeof string != 'string'){
    throw new TypeError();
  }

  let answerDecode = "";
      
  for (let i=0; i < string.length; i++){

    let decoding = string.toUpperCase().charCodeAt(i);
    let offsetNew = 26 - offset;
    console.log(decoding);
    
//let offsetDec = 26 - offset;
//let letraDecifrada = String.fromCharCode(((("C".charCodeAt() - "A".charCodeAt()) + offsetDec) % 26 ) + "A".charCodeAt());

      if (decoding >= 65 && decoding <= 90){
        decoding = (((decoding - 65) + offsetNew) % 26) + 65;
        console.log(decoding);
      }
      else if (decoding == 32) {
        decoding = (decoding + string.charAt(i));
      }

      answerDecode += String.fromCharCode(decoding);
  }   
    return answerDecode;
  }

};

export default cipher;