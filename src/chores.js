import {
	fromJS
} from 'immutable';

export function setChores( state, chores ) {
    return state.set( 'chores', fromJS( chores ) );
}
