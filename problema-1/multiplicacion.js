
multiplicación(10,10);

function multiplicación(numUno = 0, numDos = 0){
    
    let resultado = 0;
    for (let i = 0; i < numUno; i++) {
        resultado = resultado + numDos;
    }
    console.log(resultado);
}






// Problema 1: Se debe crear una solución que dado 2 números X y Y cualesquiera, se obtenga la multiplicación de los mismos SIN usar el operador de multiplicación *.