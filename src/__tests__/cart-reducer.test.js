import cartReducer, {initState} from '../store/cartReducer';

describe('cart reducer', () => {
  it('should return init state', () => {
    expect(cartReducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle ADD_TO_CART', () => {
    expect(cartReducer(initState,
      {
        type: 'ADD_TO_CART',
        payload: {name: 'testProduct'}
      })
    ).toMatchSnapshot();
  });

  it('should handle REMOVE_FROM_CART', () => {
    expect(cartReducer(
      {cartContents: [{name: 'test'}], cartCount: 1},
      {
        type: 'REMOVE_FROM_CART',
        payload: 'test'
      }
    )).toMatchSnapshot();
  })
})