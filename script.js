async function fetchPokemon() {

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
    const data = await response.json();
    console.log(data.results);



    const promises = data.results.map(pokemon => fetch(pokemon.url));
    const responses = await Promise.all(promises);
    const parseData = responses.map(response => response.json());
    const pokemonData = await Promise.all(parseData);
    console.log(pokemonData);

    const container = document.getElementById('pokemon-container');
    pokemonData.forEach(pokemon => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');
        card.innerHTML = `
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <h3>${pokemon.id}</h3>
            <h3>${pokemon.height}</h3>
            <h3>${pokemon.weight}</h3>
            <h3>${pokemon.types[0].type.name}</h3>
            <h3>${pokemon.abilities[0].ability.name}</h3>
            <button class="view-details" onclick="window.location.href='details.html?id=${pokemon.id}'">View Details</button>
        `;
        container.appendChild(card);
    });

}

fetchPokemon();
