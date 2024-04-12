document.addEventListener("DOMContentLoaded", function() {
  
    var texto = "Hola, mi nombre es Diego Armando y soy estudiante de front-end.";
   
    var elementoTexto = document.getElementById("texto-escrito");
    
    
    function escribirTexto(texto, elemento, velocidad) {
        var i = 0;
        var intervalo = setInterval(function() {
            if (i < texto.length) {
                elemento.innerHTML += texto.charAt(i);
                i++;
            } else {
                clearInterval(intervalo);
            }
        }, velocidad);
    }
    
    escribirTexto(texto, elementoTexto, 20);
});

// validacion

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
function validarFormulario(evento) {
   evento.preventDefault();




  document.getElementById("submit").addEventListener("click", function() {


    var nombre = document.getElementById("nombre").value;
    validarNombre1(nombre);

    var nombre = document.getElementById("nombre").value;
    validarNombre2(nombre);

    var email = document.getElementById("email").value;
    validarCorreo(email);


    var asunto = document.getElementById("asunto").value;
    validarAsunto1(asunto);
    
    var asunto = document.getElementById("asunto").value;
    validarAsunto2(asunto);

    
    var mensaje = document.getElementById("mensaje").value;
    validarmensaje1(mensaje);

    var mensaje = document.getElementById("mensaje").value;
    validarmensaje2(mensaje);


  });


    function validarNombre1(nombre){
        if (nombre.length <= 0) {
          document.getElementById("alertNombre1").classList.add("show");
          setTimeout(function(){
            document.getElementById("alertNombre1").classList.remove("show");
          }, 3000);
    }};


    function validarNombre2(nombre){
        if (nombre.length >= 30) {
          document.getElementById("alertNombre2").classList.add("show");
          setTimeout(function(){
            document.getElementById("alertNombre2").classList.remove("show");
          }, 3000);
    }};

    

    function validarCorreo(email){
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido = expReg.test(email);
          if(esValido == false){
            document.getElementById('alertEmail').classList.add("show");
           setTimeout(function(){
            document.getElementById('alertEmail').classList.remove("show");
         }, 3000); 
     }
  };


    function validarmensaje1(mensaje) {
        if (mensaje.length <= 0) {
            document.getElementById('alertMensaje1').classList.add("show");
            setTimeout(function() {
                document.getElementById('alertMensaje1').classList.remove("show");
          }, 3000);
        }
    };


    function validarmensaje2(mensaje) {
        if (mensaje.length > 500) {
            document.getElementById('alertMensaje2').classList.add("show");
            setTimeout(function() {
                document.getElementById('alertMensaje2').classList.remove("show");
          }, 3000);
        }
    };

      




    function validarAsunto1(asunto){
        if (asunto.length === 0) {
          document.getElementById("alertAsunto1").classList.add("show");
          setTimeout(function(){
            document.getElementById("alertAsunto1").classList.remove("show");
          }, 3000); 
        }
    };

      function validarAsunto2(asunto){
        if (asunto.length > 30) {
          document.getElementById("alertAsunto2").classList.add("show");
          setTimeout(function(){
            document.getElementById("alertAsunto2").classList.remove("show");
          }, 3000); 
        }
    };




}
