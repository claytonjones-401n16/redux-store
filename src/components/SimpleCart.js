import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import * as actions from '../store/cart-actions';


function SimpleCart(props) {
  const {removeFromCart} = props;

  let cartHTML = [];

  props.cartContents.forEach((item, i) => {
    cartHTML.push(
      <Grid key={i} container direction="row" justify="space-evenly" alignItems="center">
        <Grid item xs={9}>
          <Typography>
            {item.name}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button 
            className="removeFromCartButton"
            onClick={(e) => {
              // props.dispatch({
              //   type: 'REMOVE_FROM_CART',
              //   payload: item
              // })
              removeFromCart(item);
            }}
          >
            <Delete />
          </Button>
        </Grid>
      </Grid>
    )
  })

  return (
    <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Your Cart</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          { cartHTML }
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

function mapStateToProps(state) {
  return {
    cartContents: state.cart.cartContents,
    cartCount: state.cart.cartCount
  }
}

const mapDispatchToProps = (dispatch, getState) => ({
  removeFromCart: (data) => dispatch( actions.removeFromCart(data) ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart)