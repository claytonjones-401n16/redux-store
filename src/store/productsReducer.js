export const initState = {
  allProducts: [],
  addButtonDisabled: false
};

export default (state = initState, action) => {
  let newState = { ...state };

  switch (action.type) {
      // define our application's acceptable actions

      case 'GET_PRODUCTS':
        newState.allProducts = [...action.payload];
        break;
      case 'ADD_PRODUCT':
          newState.allProducts.push(action.payload);
          break;
      case 'ADD_TO_CART':
          for (let i = 0; i < newState.allProducts.length; i++) {
            if (action.payload.name === newState.allProducts[i].name) {
              newState.allProducts[i].stock = newState.allProducts[i].stock - 1;
              newState.allProducts = [...newState.allProducts];
              break;
            }
          }
          break;
      case 'REMOVE_FROM_CART':
        for (let i = 0; i < newState.allProducts.length; i++) {
          if (action.payload.name === newState.allProducts[i].name) {
            newState.allProducts[i].stock = newState.allProducts[i].stock + 1;
            newState.allProducts = [...newState.allProducts];
            break;
          }
        }
        break;
      case 'TOGGLE_ADD_BUTTONS':
        newState = {...newState, addButtonDisabled: !newState.addButtonDisabled};
        break;
      default:
          break;
  }

  return newState;
};

