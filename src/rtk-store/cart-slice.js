import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    cartCount: 0,
    cartContents: [],  
  },

  reducers: {
    add: (state, action) => {
      state.cartContents.push(action.payload);
      state.cartCount++;
    },

    remove: (state, action) => {
      for (let i = 0; i < state.cartContents.length; i++) {
        if (action.payload.name === state.cartContents[i].name) {
          state.cartContents.splice(i, 1);
          state.cartCount--;
          break;
        }
      }
    }
  }
});

export const {remove, add} = cartSlice.actions;

export const removeFromCart = (payload) => {
  
  return async dispatch => {
    await axios.put(`https://js-401-lab-07.herokuapp.com/api/v1/products/${payload._id}`, {...payload, stock: payload.stock + 1});
    dispatch(remove(payload));
  }
}

export default cartSlice.reducer;