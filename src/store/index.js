// xx - define the initial state
// define the reducer
// -- defining the action types
// -- define the behavior for each action type
// redux magic to combine the init state and reducer into a redux store

// useState(initState)
// this.state = initState

import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducer from './cartReducer';
import categoriesReducer from './categoriesReducer';
import productsReducer from './productsReducer';
import thunk from './middleware/thunk';


const reducers = combineReducers({
    cart: cartReducer,
    categories: categoriesReducer,
    products: productsReducer
})

export default createStore(reducers, applyMiddleware(thunk));
