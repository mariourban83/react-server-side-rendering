import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

import data from "./pages/API/data.json";

// initial state
const startState = {
    cards: []
};

// Actions
export const initialCards = () => {
    // initial state - data from data.json
    return {
        type: 'INITIALCARDS',
        cards: data
    }
};

export const addItem = (item) => {
    return {
        type: 'ADD',
        item
    }
};

// create store
const store = ( initialState = startState ) => {
    return createStore(reducer, initialState);
};

export const initStore = createWrapper(store);
