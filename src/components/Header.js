import React from 'react';
import { connect } from 'react-redux';

import {Link} from 'react-router-dom';


function Header(props) {

  const styles = {
    link: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }

  return (
    <header>
      <Link to='/' style={styles.link}>
        <h1>Our Store</h1>
      </Link>
      <Link to='/cart' style={styles.link}>
        <p>Cart ({props.cart.cartCount})</p>
      </Link>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
      cart: state.cart,
  };
};

export default connect(mapStateToProps)(Header);