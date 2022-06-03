
function validador(contraseña = document.querySelector('input').value) {
    const cantidadNumeros = contarNumeros(contraseña);  
    
    contraseña.length > 16 ? document.getElementById('caracteres').className = 'correcto' : document.getElementById('caracteres').className = 'incorrecto';

    !tieneMayuscula(contraseña) && !tieneMinuscula(contraseña) ? document.getElementById('minYMay').className = 'correcto' : document.getElementById('minYMay').className = 'incorrecto';

    !tieneLetrasConsecutivas(contraseña) ? document.getElementById('consecutivos').className = 'correcto' : document.getElementById('consecutivos').className = 'incorrecto';

    cantidadNumeros >= 4 ? document.getElementById('numeros').className = 'correcto' : document.getElementById('numeros').className = 'incorrecto';
   
    tieneCaracteresEspeciales(contraseña) ? document.getElementById('caracteresEspeciales').className = 'correcto' : document.getElementById('caracteresEspeciales').className = 'incorrecto';
    
    !tieneCero(contraseña) ? document.getElementById('numeroCero').className = 'correcto' : document.getElementById('numeroCero').className = 'incorrecto';
   
    !tieneEspacio(contraseña) ? document.getElementById('espacios').className = 'correcto' : document.getElementById('espacios').className = 'incorrecto';

  }

  setInterval(validador, 1000);
  
  //Validadores
  
  function tieneMinuscula(contraseña = "") {
    contraseña = contraseña.split("");
    let i = 0;
    contraseña.forEach((letra) => {
      if (letra == letra.toLowerCase() && letra != letra.toUpperCase()) {
        i++;
      } else {
        i = -1;
      }
    });
  
    if (i == contraseña.length) {
      return true;
    } else if (i == -1) {
      return false;
    }
  }
  function tieneMayuscula(contraseña = "") {
    contraseña = contraseña.split("");
    let i = 0;
    contraseña.forEach((letra) => {
      if (letra == letra.toUpperCase() && letra != letra.toLowerCase()) {
        i++;
      } else {
        i = -1;
      }
    });
  
    if (i == contraseña.length) {
      return true;
    } else if (i == -1) {
      return false;
    }
  }
  
  function tieneLetrasConsecutivas(contraseña = "") {
    let contadorRepeticiones = 0;
    let j = 1;
    let primerCaracter, siguienteCaracter;
    for (let i = 0; j < contraseña.length; i++) {
      primerCaracter = contraseña.charAt(i);
      siguienteCaracter = contraseña.charAt(j);
      j++;
      if (primerCaracter === siguienteCaracter) {
        return true;
      } else {
        contadorRepeticiones++;
      }
    }
  
    if (contadorRepeticiones == 0) {
      return true;
    } else if (contadorRepeticiones > 0) {
      return false;
    }
  }
  
  function contarNumeros(contraseña) {
    return Array.prototype.reduce.call(
      contraseña,
      function (acu, val) {
        return val.charCodeAt(0) > 47 && val.charCodeAt(0) < 58 ? acu + 1 : acu;
      },
      0
    );
  }
  
  function tieneCaracteresEspeciales(contraseña = "") {
    let caracteresEspeciales = "!@#$%^&*()+=-[]\\';,./{}|\":<>?";
    for (let i = 0; i < contraseña.length; i++) {
      if (caracteresEspeciales.indexOf(contraseña.charAt(i)) != -1) {
        return true;
      }
    }
  }
  
  function tieneCero(contraseña) {
      for (let i = 0; i < contraseña.length; i++) {
          if (contraseña.charAt(i) == 0) {
            return true;
          }
      }
  }
      
    function tieneEspacio(contraseña) {
        for (let i = 0; i < contraseña.length; i++) {
            if (contraseña.charAt(i) == " ") {
              return true;
            }
        }
    }  
  
  
  // Problema 3:  Se desea crear un validador para la contraseña de un sitio web, pero esta debe ser muy segura, para ello el cliente solicita los siguientes requerimientos para el password:
  
  // Debe tener al menos 16 caracteres.
  // Debe tener letras minúsculas y mayúsculas.
  // No puede tener 2 letras iguales consecutivas.
  // Debe contener al menos 4 números.
  // No puede tener 2 números iguales consecutivos.
  // Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de ellos puede repetirse en ninguna posición y además los caracteres no pueden estar juntos.
  // No se puede usar el número 0.
  // No se puede colocar espacios.
  
  // Nota: No debe usar expresión regular.
  