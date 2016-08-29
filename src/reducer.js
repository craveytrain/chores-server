import {
    setChores,
    addChore,
    deleteChore,
    INITIAL_STATE as CHORES_INITIAL_STATE
} from './chores';
import {
    Map,
    List
} from 'immutable';

const INITIAL_STATE = Map().merge( CHORES_INITIAL_STATE );

export default function reducer( state = Map(), action ) {
    switch ( action.type ) {
    case 'SET_CHORES':
        return state.update( 'chores', choreState => setChores( action.chores ) );

    case 'ADD_CHORE':
        return state.update( 'chores', choreState => addChore( choreState, action.chore ) );

    case 'DELETE_CHORE':
        return state.update( 'chores', choreState => deleteChore( choreState, action.choreIdx ) );
    }

    return state;
}
