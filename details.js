async function fetchPokemonDetails() {

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log('ID is:', id);

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();

    console.log(pokemon);

    const container = document.getElementById('pokemon-details');
    container.innerHTML = `
        <h1>${pokemon.name}</h1>
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
        <p>ID: ${pokemon.id}</p>
        <p>Height: ${pokemon.height}</p>
        <p>Weight: ${pokemon.weight}</p>
        <p>Type: ${pokemon.types[0].type.name}</p>
        <p>Abilities: ${pokemon.abilities[0].ability.name}</p>
        <button onclick="window.location.href='index.html'">Back</button>
    `;
}

fetchPokemonDetails();