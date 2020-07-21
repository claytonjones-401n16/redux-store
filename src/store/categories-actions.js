import axios from 'axios';

export const get = () => async dispatch => {
  let results = await axios.get('https://js-401-lab-07.herokuapp.com/api/v1/categories');
  dispatch(createInitialList(results.data.results));
}

export const createInitialList = (payload) => {
  return {
    type: 'GET_CATEGORIES',
    payload
  }
}

export const changeCategory = (payload) => {
  return {
    type: 'CHANGE_CATEGORY',
    payload
  }
}