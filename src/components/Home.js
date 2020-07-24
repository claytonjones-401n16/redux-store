import React from 'react';
import {Grid} from '@material-ui/core';
import Categories from './Categories';
import Products from './Products';
import ActiveCategory from './ActiveCategory';
import SimpleCart from './SimpleCart';

export default function Home() {

  return (
    <>
      <Grid container justify="space-between">
        <Grid item xs={3}>
            <Categories />
        </Grid>
        <Grid item xs={3}>
            <SimpleCart />
        </Grid>
      </Grid>

      <ActiveCategory />
      <Products />
    </>
  )
}