export const initState = {
  cartCount: 0,
  cartContents: [],
}

export default (state = initState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'ADD_TO_CART':
      newState.cartContents = [...newState.cartContents, action.payload];
      newState.cartCount++;
      break;
    case 'REMOVE_FROM_CART':
      for (let i = 0; i < newState.cartContents.length; i++) {
        if (action.payload.name === newState.cartContents[i].name) {
          newState.cartContents.splice(i, 1);
          newState.cartContents = [...newState.cartContents];

          newState.cartCount--;
          break;
        }
      }
      break;
    default:
      break;
  }

  return newState;
}