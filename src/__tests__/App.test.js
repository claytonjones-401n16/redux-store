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

});

