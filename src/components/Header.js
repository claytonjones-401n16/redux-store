import React from 'react';
import { connect } from 'react-redux';

function Header(props) {
  return (
    <header>
      <h1>Our Store</h1>
      <p>Cart ({props.cart})</p>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
      cart: state.cart,
  };
};

export default connect(mapStateToProps)(Header);