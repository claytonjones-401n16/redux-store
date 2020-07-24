import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getOneProduct, addToCart } from '../store/products-actions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  Grid, 
  Card,
  CardContent, 
  Accordion, 
  AccordionDetails, 
  AccordionSummary, 
  Typography,
  Button
} from '@material-ui/core';


function ProductDetails(props) {

  const {getOneProduct, productToView, addToCart} = props;
  const id = props.match.params.id;

  useEffect(() => {
    getOneProduct(id);
  }, [getOneProduct, id]);

  const styles = {
    gridContainer: {
      width: '50%',
      margin: 'auto'
    },
    title: {
      textAlign: 'center'
    },
    stock: {
      textAlign: 'start'
    },
    price: {
      textAlign: 'end'
    }
  }

  return (
      <Grid container spacing={2} justify='center' alignItems='center' style={styles.gridContainer}>
        <Grid item xs={12}>
          <Card style={styles.card}>
            <CardContent>
              <Grid container spacing={3} justify='center' alignItems='center'>
                <Grid item xs={12}>
                  <Typography color='textPrimary' variant='h1' component='h2' gutterBottom style={styles.title}>
                    {productToView.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography color='textSecondary' variant='body1' gutterBottom>
                    {productToView.description}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography color='textSecondary' variant='body1' style={styles.stock}>
                    {`Stock: ${productToView.stock || ''}`}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography color='textSecondary' variant='body1' style={styles.price}>
                    ${productToView.price}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Button 
            color='primary'
            fullWidth='true'
            variant='contained'
            disabled={props.addButtonDisabled || productToView.stock < 1 ? true : false}
            onClick={(e) => {
              addToCart(productToView)
            }}
          >ADD TO CART</Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h5'>
            Related Items
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant='body2' display='inline' align='center'>
                Suggested Item
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant='body2' display='inline' align='center'>
                Suggested Item
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant='body2' display='inline' align='center'>
                Suggested Item
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h5'>
            Product Details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant='body2'>
                Specifications
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body3' color='textSecondary'>
                Sample Specs
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant='body2'>
                User Reviews
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body3' color='textSecondary'>
                Sample Reviews
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    productToView: state.products.productToView,
    addButtonDisabled: state.products.addButtonDisabled
  }
}

const mapDispatchToProps = (dispatch) => ({
  getOneProduct: (id) => {dispatch(getOneProduct(id))},
  addToCart: (item) => {dispatch(addToCart(item))}
});

/*
const mapStateToProps = (state) => {
    return {
        products: state.products.allProducts,
        addButtonDisabled: state.products.addButtonDisabled,
        currentCategory: state.categories.currentCategory,
    };
};

const mapDispatchToProps = (dispatch, getState) => ({
    get: (data) => dispatch( actions.get(data) ),
    addToCart: (data) => dispatch( actions.addToCart(data) ),
});
*/

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);