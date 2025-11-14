import {
  createCard,
  pokeIdFromEvent,
  articleFromPokeId,
  deleteBtnFromPokeId,
  notesBtnFromPokeId,
} from './utils.js';

import { loadStoreage, deletePokemon } from './storeage.js';

showFavourites();

function showFavourites() {
  const favourites = loadStoreage();
  document.querySelector('#pokemon-container').textContent = '';
  favourites.forEach((pokemon) => {
    const isStored = true;
    createCard(pokemon, isStored);
    deleteBtnFromPokeId(pokemon.id).onclick = deleteBtnClicked;
    const notesBtn = notesBtnFromPokeId(pokemon.id);
    notesBtn.hidden = false;
    notesBtn.onclick = notesBtnClicked;
  });
}

function deleteBtnClicked(e) {
  console.log('delete button clicked');
  const pokeId = pokeIdFromEvent(e);
  deletePokemon(pokeId);
  showFavourites();
}

async function notesBtnClicked(e) {
  console.log('notes button clicked');
  // const pokeId = pokeIdFromEvent(e);
  // show notes
}
