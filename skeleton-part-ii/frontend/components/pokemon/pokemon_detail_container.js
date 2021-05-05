import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {requestSinglePokemon} from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        detail: state.entities[ownProps.match.params.id]
    });
}

