import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

// import people from './people-slice.js';
import products from './products-slice';
import categories from './categories-slice';
import cart from './cart-slice';

let reducers = combineReducers( {products, categories, cart} );

const store = configureStore({ reducer: reducers })

export default store;