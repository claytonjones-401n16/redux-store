import React from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, CardActions, Typography, Button, Grid } from '@material-ui/core';

function Products(props) {
    // list all the products that belong to the
    // current selected category

    // only show the products that belong to the current category

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
                            <Grid item xs justify="flex-end">
                                <Typography className="product-price" color="textSecondary" component="h5">
                                    ${props.products[i].price}
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
                        <Button size="small" color="primary">Add to Cart</Button>
                        <Button size="small" color="primary">View Details</Button>
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

/*
<Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
</Card>
*/

// connect() --> returns a function (assume it's called foo)
// let foo = connect(mapStateToProps);
// let connectedComponent = foo(Products)
// export default connectedComponent

const mapStateToProps = (state) => {
    return {
        products: state.products,
        currentCategory: state.currentCategory,
    };
};

export default connect(mapStateToProps)(Products);
