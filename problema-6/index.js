
async function busquedaPokemon() {
    const pokemon = document.getElementById('pokemonTxt').value;
    let url = new URL(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    const dataRequest = {
      method: "GET",
    };
    let result;
    try {
      let response = await fetch(url, dataRequest);
      result = await response.json();
    } catch (error) {
      console.log(error);
    }

    const tipos = result.types.map(n => n.type.name);
    const objPokemon = {
        nombre: result.name,
        numero: result.id,
        tipo: tipos,
        peso: result.weight,
        altura: result.height,
        imagen: result.sprites.front_default
    }

    document.getElementById('nombre').innerHTML = '<p><strong>Nombre: '+objPokemon.nombre+'</strong></p>'
    document.getElementById('numero').innerHTML = '<p><strong>Número: '+objPokemon.numero+'</strong></p>'
    document.getElementById('peso').innerHTML = '<p><strong>Peso: '+objPokemon.peso+'</strong></p>'
    document.getElementById('altura').innerHTML = '<p><strong>Altura: '+objPokemon.altura+'</strong></p>'
    document.getElementById('tipos').innerHTML = '<p><strong>Tipo: '+objPokemon.tipo+'</strong></p>'
    document.getElementById('imagen').src = objPokemon.imagen 
}



// Problema 6: Crear una página en donde se muestre un campo de texto que permita buscar en el siguiente API: https://pokeapi.co/, por el número o nombre del pokémon y muestre en pantalla los siguientes datos: Nombre, número, tipo, peso, altura y una imágen.