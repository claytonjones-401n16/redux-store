import productReducer, {initState} from '../store/productsReducer';

describe('products reducer', () => {
  it('should return the initial state', () => {
    expect(productReducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle GET_PRODUCTS', () => {
    expect(
      productReducer(initState, 
        {
          type: 'GET_PRODUCTS',
          payload: [1, 2, 3, 4],
        })
    ).toMatchSnapshot();
  });

  it('should handle ADD_TO_CART', () => {
    expect(
      productReducer([{name: 'test', stock: 10}],
        {
          tyoe: 'ADD_TO_CART',
          payload: 'test'
        })
    ).toMatchSnapshot();
  });

  it('should handle REMOVE_FROM_CART', () => {
    expect(
      productReducer([{name: 'test', stock: 10}],
        {
          tyoe: 'REMOVE_FROM_CART',
          payload: 'test'
        })
    ).toMatchSnapshot();
  })
});