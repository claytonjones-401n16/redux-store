import axios from 'axios';
import nock from 'nock';
import thunk from '../store/middleware/thunk';
import configureMockStore from 'redux-mock-store';

import * as cartActions from '../store/cart-actions';
import * as categoriesActions from '../store/categories-actions';
import * as productsActions from '../store/products-actions';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('cart actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cartCount: 0,
      cartContents: [],
    });
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates REMOVE_FROM_CART after API call', () => {
    nock('https://js-401-lab-07.herokuapp.com')
      .put('/api/v1/products/1234')
      .reply(200);

    return store.dispatch(cartActions.removeFromCart({_id: 1234}))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});

describe('categories actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      allCategories: [],
      currentCategory: '',
    });
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates GET_CATEGORIES after API call', () => {

    let categoriesData = {
      data: {
        results: ['cat1', 'cat2']
      }
    }

    // nock('https://js-401-lab-07.herokuapp.com')
    //   .get('/api/v1/categories')
    //   .reply(200, 'hello');

    // nock for some reason doesn't work here but the jest axios mock does
    axios.get.mockResolvedValue(categoriesData);

    return store.dispatch(categoriesActions.get())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});

describe('products actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      allProducts: [],
    });
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates GET_PRODUCTS after API call', () => {
    let productsData = {
      data: {
        results: ['products', 'more products']
      }
    }

    axios.get.mockResolvedValue(productsData);

    return store.dispatch(productsActions.get())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      })
  })
});