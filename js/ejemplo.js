$(function() {
    //Operaciones matemáticas
  $('#calcular').click(function(e) {
      e.preventDefault();

      var primerValor = $('#valor1').val();
      var segundoValor = $('#valor2').val()

     
      var opcionSeleccionada = $('input:radio[name=operacion]:checked').val();

      if(primerValor.match(/^[0-9]+$/) && segundoValor.match(/^[0-9]+$/)){
          //Suma
          if(opcionSeleccionada == 'suma'){
              var resultado = parseFloat(primerValor) + parseFloat(segundoValor);
          }else if(opcionSeleccionada == 'resta'){ 
              var resultado = parseFloat(primerValor) - parseFloat(segundoValor);
          }else if(opcionSeleccionada == 'multiplicacion'){
              var resultado = parseFloat(primerValor) * parseFloat(segundoValor);
          }else{
              var resultado = parseFloat(primerValor) / parseFloat(segundoValor);
          }

      }else{
          alert("Ingrese números en los campos");
      }
    
    $('#resultado').text(resultado);
  });
});