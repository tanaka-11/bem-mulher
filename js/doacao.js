const cartao = document.querySelector ("#cartao");
const doar = document.querySelector ("#doar");

$(document).ready(function(){
    $("cartao").mask("0000 0000 0000 0000");
    $("doar").mask("000.000.000.000");
  });

// $(campoCartao).mask("0000.0000.0000.0000");
// $(campoDoar).mask("0000.000.000.000.000");