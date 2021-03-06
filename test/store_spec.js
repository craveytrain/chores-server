import {
    Map,
    fromJS
} from 'immutable';
import {
    expect
} from 'chai';

import makeStore from '../src/store';

describe( 'store', () => {
    it( 'is a Redux store configured with the correct reducer', () => {
        const store = makeStore();
        expect( store.getState() )
            .to.equal( Map() );

        store.dispatch( {
            type: 'SET_CHORES',
            chores: [
                {
                    id: 'makeBed',
                    name: 'Make bed'
                }
            ]
        } )

        expect( store.getState() )
            .to.equal( fromJS( {
                chores: [
                    {
                        id: 'makeBed',
                        name: 'Make bed'
                    }
                ]
            } ) );
    } );
} );
