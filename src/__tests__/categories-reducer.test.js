import categoriesReducer, {initState} from '../store/categoriesReducer';

describe('categories reducer', () => {
  it('should return the initial state', () => {
    expect(categoriesReducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle GET_CATEGORIES', () => {
    expect(categoriesReducer(initState,
      {
        type: 'GET_CATEGORIES',
        payload: ['cat1', 'cat2', 'cat3'],
      })
    ).toMatchSnapshot();
  });

  it('should handle CHANGE_CATEGORY', () => {
    expect(categoriesReducer(initState,
      {
        type: 'CHANGE_CATEGORY',
        payload: 'cat1',
      })
    ).toMatchSnapshot();
  });

});