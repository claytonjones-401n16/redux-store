import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getOneProduct } from '../store/products-actions';


function ProductDetails(props) {

  const {getOneProduct, productToView} = props;
  const id = props.match.params.id;

  useEffect(() => {
    getOneProduct(id);
  }, [getOneProduct, id]);


  return (
    <>
      {productToView.name}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    productToView: state.products.productToView
  }
}

const mapDispatchToProps = (dispatch) => ({
  getOneProduct: (id) => {dispatch(getOneProduct(id))}
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);