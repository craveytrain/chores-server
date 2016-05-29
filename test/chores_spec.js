import {
    List,
    Map
} from 'immutable';
import {
    expect
} from 'chai';

import {
    setChores
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

} );
