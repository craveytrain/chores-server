import {
    Map,
    fromJS
} from 'immutable';
import {
    expect
} from 'chai';

import reducer from '../src/reducer';

describe( 'reducer', () => {
    it( 'has an initial state', () => {
        const action = {
            type: 'SET_CHORES',
            chores: {
                makeBed: {
                    name: 'Make bed'
                }
            }
        };
        const nextState = reducer( undefined, action );
        expect( nextState )
            .to.equal( fromJS( {
                chores: {
                    makeBed: {
                        name: 'Make bed'
                    }
                }
            } ) );
    } );

    it( 'can be used with reduce', () => {
        const actions = [
            {
                type: 'SET_CHORES',
                chores: {
                    makeBed: {
                        name: 'Make bed'
                    }
                }
            },
            {
                type: 'ADD_CHORE',
                chore: {
                    cleanTable: {
                        name: 'Clean table'
                    }
                }
            },
            {
                type: 'DELETE_CHORE',
                choreId: 'makeBed'
            }
	  ];
        const finalState = actions.reduce( reducer, Map() );

        expect( finalState )
            .to.equal( fromJS( {
                chores: {
                    cleanTable: {
                        name: 'Clean table'
                    }
                }
            } ) );
    } );

    it( 'handles SET_CHORES', () => {
        const action = {
            type: 'SET_CHORES',
            chores: {
                makeBed: {
                    name: 'Make bed'
                }
            }
        };
        const nextState = reducer( undefined, action );

        expect( nextState )
            .to.equal( fromJS( {
                chores: {
                    makeBed: {
                        name: 'Make bed'
                    }
                }
            } ) );
    } );

    it( 'handles ADD_CHORE', () => {
        const action = {
            type: 'ADD_CHORE',
            chore: {
                makeBed: {
                    name: 'Make bed'
                }
            }
        };

        const nextState = reducer( undefined, action );

        expect( nextState )
            .to.equal( fromJS( {
                chores: {
                    makeBed: {
                        name: 'Make bed'
                    }
                }
            } ) );

    } );

    it( 'handles DELETE_CHORE', () => {
        const initialState = fromJS( {
            chores: {
                makeBed: {
                    name: 'Make bed'
                }
            }
        } );
        const action = {
            type: 'DELETE_CHORE',
            choreId: 'makeBed'
        };
        const nextState = reducer( initialState, action );

        expect( nextState )
            .to.equal( fromJS( {
                chores: {}
            } ) );
    } );
} );
