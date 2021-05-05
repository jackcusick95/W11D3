import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from './../actions/pokemon_actions';

const itemReducers = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POKEMON:
      const newItem = action.pokemon.items;
      return Object.assign({}, state, { [newItem.id]: newItem });
    default:
      return state;
  }
}

export default itemReducers;