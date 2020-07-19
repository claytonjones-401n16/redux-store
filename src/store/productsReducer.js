const initState = {
  allProducts: [
      // {
      //     name: 'TV',
      //     description: 'See all the things',
      //     stock: 5,
      //     price: 400,
      //     category: 'electronics',
      // },
      // {
      //     name: 'Macbook',
      //     description: 'Do all the things',
      //     stock: 7,
      //     price: 1200,
      //     category: 'electronics',
      // },
      // {
      //     name: 'Carrot',
      //     description: 'Crunch all the things',
      //     stock: 25,
      //     price: 0.3,
      //     category: 'food',
      // },
      // {
      //     name: 'Cake',
      //     description: 'Lie all the things',
      //     stock: 10,
      //     price: 5,
      //     category: 'food',
      // },
  ],
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
      default:
          break;
  }

  return newState;
};

