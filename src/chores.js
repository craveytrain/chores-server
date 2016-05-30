import { fromJS } from 'immutable';

export function setChores( state, chores ) {
    return state.set( 'chores', fromJS( chores ) );
}

export function addChore( state, chore ) {
	const chores = state.get('chores');

	return state.merge({
		chores: chores.merge(chore)
	});
}

export function deleteChore( state, choreId ) {
	const chores = state.get('chores');

	return state.merge({
		chores: chores.delete(choreId)
	});
}
