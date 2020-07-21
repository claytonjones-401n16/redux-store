export const initState = {
  allCategories: [],
  currentCategory: '',
};

export default (state = initState, action) => {
  let newState = { ...state };

  switch (action.type) {
      case 'GET_CATEGORIES':
        newState.allCategories = [...action.payload];
        break;
      case 'CHANGE_CATEGORY':
          newState.currentCategory = action.payload;
          break;
      case 'ADD_CATEGORY':
          newState.allCategories.push(action.payload);
          break;
      default:
          break;
  }

  return newState;
};

