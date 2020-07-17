const initState = {
  allCategories: [
      { name: 'electronics', displayName: 'Electronics' },
      { name: 'food', displayName: '' },
  ],
  currentCategory: 'food',
};

export default (state = initState, action) => {
  let newState = { ...state };

  switch (action.type) {
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

