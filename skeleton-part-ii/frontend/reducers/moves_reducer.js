import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from './../actions/pokemon_actions';

const movesReducers = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POKEMON:
            const newMove = action.pokemon.moves;
            return Object.assign({}, state, { [newMove.id]: newMove});
        default:
            return state;
    }
}

export default movesReducers;