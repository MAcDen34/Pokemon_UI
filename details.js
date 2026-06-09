async function fetchPokemonDetails() {

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();

    console.log(pokemon);
}

fetchPokemonDetails();