import React from 'react';
import App from '../App';
import {mount} from 'enzyme';

describe('Redux Store', () => {
  it('shows a list of product categories', () => {
    let component = mount(<App />);
    
    expect(component.find('.button-group')).toBeDefined();
  });
  
  it('shows a list of products', () => {
    let component = mount(<App />);
    
    expect(component.find('.product-container')).toBeDefined();
  });
  
  it('renders a category title when a category is clicked', () => {
    let component = mount(<App />);

    component.find('.electronics-button').first().simulate('click');

    expect(component.find('.active-category h1').text()).toBe('electronics');

  });

  it('cart total increases when adding an item', () => {
    let component = mount(<App />);

    expect(component.find('header p').text()).toEqual('Cart (0)');
    component.find('.addToCartButton').first().simulate('click');
    expect(component.find('header p').text()).toEqual('Cart (1)');

    component.unmount();
  });

  it('cart total decreases when removing an item', () => {
    let component = mount(<App />);

    component.find('.removeFromCartButton').first().simulate('click');
    expect(component.find('header p').text()).toEqual('Cart (0)');

  });
});

