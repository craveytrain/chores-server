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
            const chore = {
                makeBed: {
                    name: 'Make bed'
                }
            };
            const nextState = setChores( Map(), chore );
            expect( nextState )
                .to.equal( fromJS( {
                    chores: {
                        makeBed: {
                            name: 'Make bed'
                        }
                    }
                } ) );
        } );
    } );

    describe( 'addChore', () => {
        it( 'adds a chore to the state', () => {
            const state = {
                makeBed: {
                    name: 'Make bed'
                }
            };
            const chore = {
                clearTable: {
                    name: 'Clear table'
                }
            };
            const initialState = setChores( Map(), state );
            const nextState = addChore( initialState, chore );
            expect( nextState )
                .to.equal( fromJS( {
                    chores: {
                        makeBed: {
                            name: 'Make bed'
                        },
                        clearTable: {
                            name: 'Clear table'
                        }
                    }
                } ) );
        } );
    } );

    describe( 'deleteChore', () => {
        it( 'deletes a chore from the state', () => {
            const state = {
                makeBed: {
                    name: 'Make bed'
                },
                clearTable: {
                    name: 'Clear table'
                }
            };
            const initialState = setChores( Map(), state );
            const nextState = deleteChore( initialState, 'clearTable' );
            expect( nextState )
                .to.equal( fromJS( {
                    chores: {
                        makeBed: {
                            name: 'Make bed'
                        }
                    }
                } ) );
        } );
    } );
} );
