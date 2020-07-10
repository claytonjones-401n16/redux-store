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
});

