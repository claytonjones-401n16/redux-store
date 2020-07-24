import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',

  initialState: {
    allCategories: [],
    currentCategory: '',  
  },

  reducers: {
    createInitialList: (state, action) => {
      state.allCategories = action.payload;
    },

    changeCategory: (state, action) => {
      state.currentCategory = action.payload;
    }
  }
});

export const {createInitialList, changeCategory} = categoriesSlice.actions;

export const get = () => async dispatch => {
  let results = await axios.get('https://js-401-lab-07.herokuapp.com/api/v1/categories');
  dispatch(createInitialList(results.data.results));
}

export default categoriesSlice.reducer;