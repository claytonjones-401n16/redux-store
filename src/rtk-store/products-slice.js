import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit';

let productsSlice = createSlice({
  name: 'products',

  initialState: {
    allProducts: [],
    addButtonDisabled: false,
    productToView: {}  
  },

  reducers: {
    createInitialList: (state, action) => {
      state.allProducts = action.payload;
    },

    add: (state, action) => {
      for (let i = 0; i < state.allProducts.length; i++) {
        if (action.payload.name === state.allProducts[i].name) {
          state.allProducts[i].stock--;
          break;
        }
      }
      if (state.productToView.name && state.productToView.name === action.payload.name) {
        state.productToView.stock--;
      }
    },
    remove: (state, action) => {
      for (let i = 0; i < state.allProducts.length; i++) {
        if (action.payload.name === state.allProducts[i].name) {
          state.allProducts[i].stock++;
          break;
        }
      }
    },

    toggleAddButtons: (state, action) => {
      state.addButtonDisabled = !state.addButtonDisabled;
    },

    viewOneProduct: (state, action) => {
      state.productToView = action.payload;
    }
  }
});

export const {add, toggleAddButtons, viewOneProduct, createInitialList, remove} = productsSlice.actions;

export const get = () => async dispatch => {
  let results = await axios.get('https://js-401-lab-07.herokuapp.com/api/v1/products')
  dispatch(createInitialList(results.data.results))
}

export const addToCart = (payload) => {
  return async dispatch => {
    dispatch(toggleAddButtons());
    await axios.put(`https://js-401-lab-07.herokuapp.com/api/v1/products/${payload._id}`, {...payload, stock: payload.stock - 1});
    dispatch(add(payload));
    dispatch(toggleAddButtons());
  }
}

export const getOneProduct = (payload) => async dispatch => {
  dispatch(viewOneProduct({}));

  let results = await axios.get(`https://js-401-lab-07.herokuapp.com/api/v1/products/${payload}`);

  dispatch(viewOneProduct(results.data));
}

export default productsSlice.reducer;