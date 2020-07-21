import axios from 'axios';

export const get = () => async dispatch => {
  let results = await axios.get('https://js-401-lab-07.herokuapp.com/api/v1/products')
  dispatch(createInitialList(results.data.results))
}

const createInitialList = (payload) => {
  return {
    type: 'GET_PRODUCTS',
    payload
  }
}

export const addToCart = (payload) => {
  return async dispatch => {
    dispatch(toggleAddButtons());
    await axios.put(`https://js-401-lab-07.herokuapp.com/api/v1/products/${payload._id}`, {...payload, stock: payload.stock - 1});
    dispatch(actualAdd(payload));
    dispatch(toggleAddButtons());
  }
}

export const actualAdd = (payload) => {
  return {
    type: 'ADD_TO_CART',
    payload
  }
}

const toggleAddButtons = () => {
  return {
    type: 'TOGGLE_ADD_BUTTONS'
  }
}
