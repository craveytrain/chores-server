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
        const nextState = reducer( undefined, {
            type: 'SET_CHORES',
            chores: [
                {
                    id: 'makeBed',
                    name: 'Make bed'
                }
            ]
        } );

        expect( nextState )
            .to.equal( fromJS( {
                chores: [
                    {
                        id: 'makeBed',
                        name: 'Make bed'
                    }
                ]
            } ) );
    } );

    it( 'handles SET_CHORES', () => {
        const action = {
            type: 'SET_CHORES',
            chores: [
                {
                    id: 'makeBed',
                    name: 'Make bed'
                }
            ]
        };
        const nextState = reducer( undefined, action );

        expect( nextState )
            .to.equal( fromJS( {
                chores: [
                    {
                        id: 'makeBed',
                        name: 'Make bed'
                    }
                ]
            } ) );
    } );

    it( 'handles ADD_CHORE', () => {
        const action = {
            type: 'ADD_CHORE',
            chore: {
                id: 'makeBed',
                name: 'Make bed'
            }
        };

        const nextState = reducer( undefined, action );

        expect( nextState )
            .to.equal( fromJS( {
                chores: [
                    {
                        id: 'makeBed',
                        name: 'Make bed'
                    }
                ]
            } ) );

    } );

    it( 'handles DELETE_CHORE', () => {
        const initialState = fromJS( {
            chores: [
                {
                    id: 'makeBed',
                    name: 'Make bed'
                }
            ]
        } );
        const action = {
            type: 'DELETE_CHORE',
            choreIdx: 0
        };
        const nextState = reducer( initialState, action );

        expect( nextState )
            .to.equal( fromJS( {
                chores: []
            } ) );
    } );

    it( 'can be used with reduce', () => {
        const actions = [
            {
                type: 'SET_CHORES',
                chores: [
                    {
                        id: 'makeBed',
                        name: 'Make bed'
                    }
                ]
            },
            {
                type: 'ADD_CHORE',
                chore: {
                    id: 'cleanTable',
                    name: 'Clean table'
                }
            },
            {
                type: 'DELETE_CHORE',
                choreIdx: 0
            }
      ];
        const finalState = actions.reduce( reducer, Map() );

        expect( finalState )
            .to.equal( fromJS( {
                chores: [
                    {
                        id: 'cleanTable',
                        name: 'Clean table'
                    }
                ]
            } ) );
    } );

} );
