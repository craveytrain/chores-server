import {
    Map,
    fromJS
} from 'immutable';
import {
    expect
} from 'chai';

import {
    setChores,
    addChore,
    deleteChore
} from '../src/chores';

describe( 'chores logic', () => {

    describe( 'setChores', () => {
        it( 'sets the chores to the state', () => {
            const nextState = setChores( Map(), {
                makeBed: {
                    name: 'Make bed'
                }
            } );

            expect( nextState )
                .to.equal( fromJS( {
                    makeBed: {
                        name: 'Make bed'
                    }
                } ) );
        } );
    } );

    describe( 'addChore', () => {
        it( 'adds a chore to the state', () => {
            const initialState = setChores( Map(), {
                makeBed: {
                    name: 'Make bed'
                }
            } );

            const nextState = addChore( initialState, {
                clearTable: {
                    name: 'Clear table'
                }
            } );

            expect( nextState )
                .to.equal( fromJS( {
                    makeBed: {
                        name: 'Make bed'
                    },
                    clearTable: {
                        name: 'Clear table'
                    }
                } ) );
        } );
    } );

    describe( 'deleteChore', () => {
        it( 'deletes a chore from the state', () => {
            const initialState = setChores( Map(), {
                makeBed: {
                    name: 'Make bed'
                },
                clearTable: {
                    name: 'Clear table'
                }
            } );

            const nextState = deleteChore( initialState, 'clearTable' );

            expect( nextState )
                .to.equal( fromJS( {
                    makeBed: {
                        name: 'Make bed'
                    }
                } ) );
        } );
    } );
} );
