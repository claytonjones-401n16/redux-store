import React from 'react';
import {connect} from 'react-redux';

import AddressForm from './shoppingCartComponents/addressForm';
import PaymentForm from './shoppingCartComponents/paymentForm';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@material-ui/core';

function ShoppingCart(props) {

  const styles = {
    card: {
      width: '60%',
      margin: '5rem auto'
    },
    item: {
      padding: '1rem 0'
    }
  }

  let cartItems = [];
  let priceTotal = 0;

  props.cartContents.forEach(item => {
    priceTotal += item.price;

    cartItems.push( (
        <Grid container justify='space-between' alignItems='center' style={styles.item}>
          <Grid item xs={3}>
            <Typography variant='body1' align='left'>
              {item.name}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='body1' align='right'>
              ${item.price}
            </Typography>
          </Grid>
        </Grid>
    ));
  });

  cartItems.push( (
    <Grid container justify='space-between' alignItems='center' style={styles.item}>
    <Grid item xs={3}>
      <Typography variant='h6' align='left'>
        Total
      </Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant='h6' align='right'>
        ${priceTotal}
      </Typography>
    </Grid>
  </Grid>
  ));

  return (
    <Card style={styles.card}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h5'>
              Order Summary
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {cartItems}
          </Grid>
          <Grid item xs={6}>
            <AddressForm />
          </Grid>
          <Grid item xs={6}>
            <PaymentForm />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button variant='contained' fullWidth='true' color='primary'>PLACE ORDER</Button>
      </CardActions>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    cartContents: state.cart.cartContents,
  }
}

export default connect(mapStateToProps)(ShoppingCart);