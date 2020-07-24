import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActions, Typography, Button, Grid } from '@material-ui/core';
import * as actions from '../store/products-actions';

function Products(props) {
    // list all the products that belong to the
    // current selected category

    // only show the products that belong to the current category

    const {get, addToCart} = props;

    useEffect(() => {
        get();
    }, [get]);

    let productsHTML = [];

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].category === props.currentCategory)
            productsHTML.push(
                <Card key={i} className="Card" >
                    <CardContent >
                        <Grid container spacing={3}>
                            <Grid item xs={9}>
                                <Typography className="card-title" color="textPrimary" component="h2" gutterBottom>
                                    {props.products[i].name}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography className="product-price" color="textSecondary" component="h5">
                                    ${props.products[i].price}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <Typography color="textPrimary" component="p">
                                    Quantity: {props.products[i].stock}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <Typography color="textSecondary" component="p">
                                    {props.products[i].description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions >
                        <Button 
                            className="addToCartButton"
                            size="small"
                            color="primary"
                            onClick={() => { 
                                addToCart(props.products[i]);
                            }} 
                            disabled={props.addButtonDisabled || props.products[i].stock < 1 ? true : false}
                        >Add to Cart</Button>
                        <Link to={`/product/${props.products[i]._id}`}>
                            <Button
                                size="small"
                                color="primary"
                            >View Details</Button>
                        </Link>
                    </CardActions>
                </Card>
            )
    }

    return (
        <>
            <h2>Products</h2>
            <div className="product-container">
                {productsHTML}
            </div>
        </>
    );
}

// connect() --> returns a function (assume it's called foo)
// let foo = connect(mapStateToProps);
// let connectedComponent = foo(Products)
// export default connectedComponent

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

export default connect(mapStateToProps, mapDispatchToProps)(Products);
