import axios from 'axios';

export const removeFromCart = (payload) => {
  
  return async dispatch => {
    await axios.put(`https://js-401-lab-07.herokuapp.com/api/v1/products/${payload._id}`, {...payload, stock: payload.stock + 1});
    dispatch(actualRemove(payload));
  }
}
export const actualRemove = (payload) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload
  }
}