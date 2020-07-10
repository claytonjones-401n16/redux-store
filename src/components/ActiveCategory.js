import React from 'react';
import { connect } from 'react-redux';


function ActiveCategory(props) {
  return (
    <div className="active-category">
      <h1>{props.currentCategory}</h1>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    currentCategory: state.currentCategory
  }
}

export default connect(mapStateToProps)(ActiveCategory);