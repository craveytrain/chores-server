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
            const nextState = setChores( [ {
                id: 'makeBed',
                name: 'Make bed'
            } ] );

            expect( nextState )
                .to.equal( fromJS( [ {
                    id: 'makeBed',
                    name: 'Make bed'
                } ] ) );
        } );
    } );

    describe( 'addChore', () => {
        it( 'adds a chore to the state', () => {
            const initialState = setChores( [ {
                id: 'makeBed',
                name: 'Make bed'
            } ] );

            const nextState = addChore( initialState, {
                    id: 'clearTable',
                    name: 'Clear table'
            } );

            expect( nextState )
                .to.equal( fromJS( [
                    {
                        id: 'makeBed',
                        name: 'Make bed'
                    },
                    {
                        id: 'clearTable',
                        name: 'Clear table'
                    }
                ] ) );
        } );
    } );

    describe( 'deleteChore', () => {
        it( 'deletes a chore from the state', () => {
            const initialState = setChores( [
                {
                    id: 'makeBed',
                    name: 'Make bed'
                },
                {
                    id: 'clearTable',
                    name: 'Clear table'
                }
            ] );

            const nextState = deleteChore( initialState, 1 );

            expect( nextState )
                .to.equal( fromJS( [ {
                    id: 'makeBed',
                    name: 'Make bed'
                } ] ) );
        } );
    } );
} );
