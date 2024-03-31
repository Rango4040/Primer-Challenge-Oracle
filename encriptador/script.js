
var ouputDIV = document.getElementById("container-ouput-text");
var inputText = document.getElementById('text-input');
var button = document.getElementById('button-copy');
var outputimage = document.getElementById('ouput-imagen');
var textOuput = document.getElementById('text-ouput');



ouputDIV.style.display = "none";

/*
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
*/


function encrypt() {

    if (inputText.value == '') {
       Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingresa algo de texto para encriptar por favor',
        showConfirmButton: false,
        timer: 1800
        
      })
    }
    else {
        ouputDIV.style.display = "block";
        outputimage.style.display = "none";
        
        var textOriginal = inputText.value.toLowerCase();
        var txtCifrado = textOriginal.replace(/e/igm,"enter")
        txtCifrado= txtCifrado.replace(/i/igm,"imes");
        txtCifrado= txtCifrado.replace(/a/igm,"ai");
        txtCifrado= txtCifrado.replace(/o/igm,"ober");
        txtCifrado= txtCifrado.replace(/u/igm,"ufat")

        textOuput.value = txtCifrado;
    }

}
function decrypt() {
    if (inputText.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingresa algo de texto para desencriptar por favor',
            showConfirmButton: false,
            timer: 1800
            
          })
    }
    else {
        ouputDIV.style.display = "block";
        outputimage.style.display = "none";
        
        var textOriginal = inputText.value.toLowerCase();
        var txtCifrado = textOriginal.replace(/enter/igm,"e")
        txtCifrado= txtCifrado.replace(/imes/igm,"i");
        txtCifrado= txtCifrado.replace(/ai/igm,"a");
        txtCifrado= txtCifrado.replace(/ober/igm,"o");
        txtCifrado= txtCifrado.replace(/ufat/igm,"u")

        textOuput.value = txtCifrado;
    }
}
function copiarTexto() {
    textOuput.select();
    document.execCommand('copy');
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Texto copiado en el portapeles',
        showConfirmButton: false,
        timer: 1000
      })

}
