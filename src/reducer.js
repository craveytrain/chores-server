import { setChores, addChore, deleteChore } from './chores';

export default function reducer(state, action) {
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
