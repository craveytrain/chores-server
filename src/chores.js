import { List, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({ chores: [] });

export function setChores( chores ) {
    if ( !chores ) return List();
    return fromJS( chores );
}

export function addChore( choreState = List(), chore ) {
	return choreState.push(fromJS(chore));
}

export function deleteChore( choreState, choreIdx ) {
	return choreState.remove(choreIdx);
}
