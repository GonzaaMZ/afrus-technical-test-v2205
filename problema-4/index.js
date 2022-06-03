function arregloNumeros(arreglo = []){

    const cantidadElementos = arreglo.length;
    const porcentajePares = calcularPares(arreglo);
    const porcentajeImpares = calcularImpares(arreglo);
    const porcentajeMayor = porcentajeMayorAMil(arreglo);    
    const {mayor, menor} = mayorYMenor(arreglo);
    const {porcentajeNumeroMinimo, porcentajePromedio} = operaciones(arreglo);
   
    console.log(arreglo);
    console.log('Cantidad de elementos del arreglo: ' + cantidadElementos);
    console.log('Porcentaje de números pares: ' + porcentajePares + '%');
    console.log('Porcentaje de números impares: ' + porcentajeImpares  + '%');
    console.log('Porcentaje de números mayores a 1000: ' + porcentajeMayor + '%');
    console.log('Número Mayor: ' + mayor);
    console.log('Número menor: ' + menor);
    console.log('Porcentaje del número mínimo: ' + porcentajeNumeroMinimo + '%');
    console.log('Porcentaje del promedio: ' + porcentajePromedio + '%');
    
   
}
arregloNumeros([1,3,5,7,10]);


function calcularPares(arreglo = []){
    const totalElementos = arreglo.length;
    const cantidadPares = arreglo.filter(n => n % 2 == 0);
    const cantidadParesEnArreglo = cantidadPares.length;
    const resultado =  (cantidadParesEnArreglo * 100)  / totalElementos 
    return resultado;
}

function calcularImpares(arreglo = []){
    const totalElementos = arreglo.length;
    const cantidadImpares = arreglo.filter(n => n % 2 == 1);
    const cantidadImparesEnArreglo = cantidadImpares.length;
    const resultado =  (cantidadImparesEnArreglo * 100)  / totalElementos 
    return resultado;
}

function porcentajeMayorAMil(arreglo = []) {
    const totalElementos = arreglo.length;
    const filtrado = arreglo.filter(n => n > 1000);
    const cantidadMayores = filtrado.length 
    const resultado = (cantidadMayores * 100) / totalElementos;
    return resultado
}

function mayorYMenor(arreglo = []) {
    const mayor = Math.max(...arreglo);
    const menor = Math.min(...arreglo);
    return {
        mayor,
        menor
    }
}

function operaciones(arreglo = []){
    const {mayor, menor} = mayorYMenor(arreglo);
    const porcentajeNumeroMinimo = (menor * 100) / mayor;
    const sumaDeElemetos = arreglo.reduce((a, b) => a + b)
    const promedio = sumaDeElemetos / arreglo.length;
    const porcentajePromedio = (promedio * 100) / mayor;
    return {
        porcentajeNumeroMinimo,
        porcentajePromedio
    }
}


// Problema 4: Dado un arreglo de números cualesquiera sacar la siguiente información:

// Cantidad de elementos del arreglo.
// Porcentaje de números pares e impares.
// Porcentaje de números mayores a 1000.
// Cuál es el mayor y menor valor.
// Asuma los siguientes indicadores: Tome en cuenta que el mayor número representa el 100%, indique cual es el porcentaje del número mínimo y el porcentaje del promedio de todos los números.
