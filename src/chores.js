import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({ chores: {} });

export function setChores( chores ) {
    return Map().merge( fromJS( chores ) );
}

export function addChore( choreState, chore ) {
	return choreState.merge(fromJS(chore));
}

export function deleteChore( choreState, choreId ) {
	return choreState.delete(choreId);
}
