import { setChores, addChore, deleteChore, INITIAL_STATE } from './chores';

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SET_CHORES':
			return setChores( state, action.chores );
		case 'ADD_CHORE':
			return addChore( state, action.chore );
		case 'DELETE_CHORE':
			return deleteChore( state, action.choreId );
	}

	return state;
}
