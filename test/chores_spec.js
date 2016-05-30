import {
    List,
    Map
} from 'immutable';
import {
    expect
} from 'chai';

import {
    setChores,
    addChore
} from '../src/chores';

describe( 'application logic', () => {

    describe( 'setChores', () => {
        it( 'sets the chores to the state', () => {
            const state = Map();
            const chore = Map( {
                makeBed: Map( {
                    name: 'Make bed'
                } )
            } );
            const nextState = setChores( state, chore );
            expect( nextState )
                .to.equal( Map( {
                    chores: Map( {
                        makeBed: Map( {
                            name: 'Make bed'
                        } )
                    } )
                } ) );
        } );

        it( 'converts to immutable', () => {
            const state = Map();
            const chores = {
                makeBed: {
                    name: 'Make bed'
                }
            };
            const nextState = setChores( state, chores );
            expect( nextState )
                .to.equal( Map( {
                    chores: Map( {
                        makeBed: Map( {
                            name: 'Make bed'
                        } )
                    } )
                } ) );
        } );

    } );

    describe( 'addChore', () => {
        it( 'adds a chore to the state', () => {
            const state = Map( {
                makeBed: Map( {
                    name: 'Make bed'
                } )
            } );
            const chore = Map( {
                clearTable: Map( {
                    name: 'Clear table'
                } )
            } );
            const initialState = setChores( Map(), state );
            const nextState = addChore( initialState, chore );
            expect( nextState )
                .to.equal( Map( {
                    chores: Map( {
                        makeBed: Map( {
                            name: 'Make bed'
                        } ),
                        clearTable: Map( {
                            name: 'Clear table'
                        } )
                    } )
                } ) );

        } );
    } );

} );
