//Funcion 1
const sumaTotal = async (tipo = "") => {
  let url = new URL(`https://pokeapi.co/api/v2/type/${tipo}`);
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
  const total = result.pokemon.length;
  console.log(total);
};

 sumaTotal("ground");

//Funcion 2

const pokemonDosTipos = async (tipo = "", tipoDos = "") => {
  let urlTipoUno = new URL(`https://pokeapi.co/api/v2/type/${tipo}`);
  let urlTipoDos = new URL(`https://pokeapi.co/api/v2/type/${tipoDos}`);

  const dataRequest = {
    method: "GET",
  };

  let result;
  let resultTipoDos;
  try {
    let responseTipoUno = await fetch(urlTipoUno, dataRequest);
    let responseTipoDos = await fetch(urlTipoDos, dataRequest);
    result = await responseTipoUno.json();
    resultTipoDos = await responseTipoDos.json();
  } catch (error) {
    console.log(error);
  }

  let pokemon = [];
  pokemon = result.pokemon.concat(resultTipoDos.pokemon);

  const pokemones = pokemon.map((p) => p.pokemon.name);

  let filtrado = pokemones.filter((p, i) => {
    return pokemones.indexOf(p) !== i;
  });

  console.log(filtrado);
};
 pokemonDosTipos("ground", "rock");

//Funcion 3

const numeroPokemon = async (nombre = "") => {
  let url = new URL(`https://pokeapi.co/api/v2/pokemon/${nombre}/`);
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
  console.log("Numero de Pokemon: " + result.id);
};
 numeroPokemon("charmander")

//Funcion 4

const statsBase = async (numero = 0) => {
  let url = new URL(`https://pokeapi.co/api/v2/pokemon/${numero}/`);
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
  // console.log(result.stats);
  const pokemon = result.stats.map((t) => {
    return (objPokemon = {
      name: t.stat.name,
      base_stat: t.base_stat,
    });
  });
  const objeto = Object.assign({}, pokemon);
  console.log(objeto);
};
 statsBase(4)

//Funcion 5
const arrayPokemon = async (numeros = [], ordenador) => {
  let pokemones = [];
  const dataRequest = {
    method: "GET",
  };
  for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    let url = new URL(`https://pokeapi.co/api/v2/pokemon/${element}/`);
    let response = await fetch(url, dataRequest);
    let result = await response.json();
    pokemones.push({
      nombre: result.name,
      tipo: result.types,
      peso: result.weight,
    });
  }
  console.log(pokemones);
};
 arrayPokemon([1,2, 9, 15]);

//Funcion 6
const pokemonTipo = async (numero = 0, tipo = "") => {
  let urlUno = new URL(`https://pokeapi.co/api/v2/type/${tipo}`);
  let urlDos = new URL(`https://pokeapi.co/api/v2/pokemon/${numero}/`);
  const dataRequest = {
    method: "GET",
  };
  let resultUno, resultDos;
  try {
    let responseUno = await fetch(urlUno, dataRequest);
    let responseDos = await fetch(urlDos, dataRequest);
    resultUno = await responseUno.json();
    resultDos = await responseDos.json();
  } catch (error) {
    console.log(error);
  }

  const nombrePoke = resultUno.pokemon.map((t) => {
    return t.pokemon.name;
  });

  const resultado = nombrePoke.includes(resultDos.name) ? true : false;
  console.log(resultado);
};
pokemonTipo(10, "ground");

// Problema 2:  Genere una serie de funciones (Una por cada ??tem) que consuma de la p??gina de https://pokeapi.co/ y retorne lo siguiente:
// Suma total de pokemones por tipo, debe recibir el tipo en string.
// Dado 2 tipos de pok??mon retornar todos los pokemones que cumplen con esos 2 tipos.
// Dado el nombre de un pok??mon retornar el n??mero del mismo.
// Dado el n??mero de un pok??mon retornar un objeto con sus 6 stats base.
// Realizar una funci??n que reciba un arreglo de n??meros (Ids de pok??mon) y un ordenador y retorne los pok??mon en un arreglo con su nombre, tipo y peso ordenados seg??n se indique por la funci??n por uno de estos 3 indicadores.
// Recibir un n??mero y un tipo (de pok??mon) y retornar un true o false si el pok??mon de ese n??mero posee este tipo.
