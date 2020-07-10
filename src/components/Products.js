import React from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';

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
                        <Typography className="card-title" color="textSecondary" gutterBottom>
                            {props.products[i].name}
                        </Typography>
                        <Typography component="h5" >
                            {props.products[i].description}
                        </Typography>
                        <Typography >
                            ${props.products[i].price}
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <Button size="small">Add to Cart</Button>
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
