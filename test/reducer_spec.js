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
            chores: Map( {
                makeBed: Map( {
                    name: 'Make bed'
                } )
            } )
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


    it( 'handles SET_CHORES', () => {
        const initialState = Map();
        const action = {
            type: 'SET_CHORES',
            chores: Map( {
                makeBed: Map( {
                    name: 'Make bed'
                } )
            } )
        };
        const nextState = reducer( initialState, action );

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
        const initialState = Map( {
            chores: Map( {} )
        } );
        const action = {
            type: 'ADD_CHORE',
            chore: Map( {
                makeBed: Map( {
                    name: 'Make bed'
                } )
            } )
        };

        const nextState = reducer( initialState, action );

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
