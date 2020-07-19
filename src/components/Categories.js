import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from '@material-ui/core';

import * as actions from '../store/categories-actions';

function Categories(props) {
    console.log('categories props', props);

    const {get, changeCategory} = props;
    
    useEffect(() => {
        get();
    }, [get])

    let categoriesHTML = [];


    for (let i = 0; i < props.categories.length; i++)
        categoriesHTML.push(
            <Button
                key={i}
                className={`${props.categories[i].name}-button`}
                onClick={(e) => {
                    // change the current category
                    // props.dispatch({
                    //     type: 'CHANGE_CATEGORY',
                    //     payload: props.categories[i].name,
                    // });
                    changeCategory(props.categories[i].name)
                }}
            >
                {props.categories[i].displayName || props.categories[i].name}
            </Button>,
        );

    return <ButtonGroup 
                variant="text"
                color="primary"
                aria-label="text primary button group"
                className="button-group"
            >
                {categoriesHTML}
            </ButtonGroup>;
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories.allCategories,
    };
};

const mapDispatchToProps = (dispatch, getState) => ({
    get: (data) => dispatch( actions.get(data) ),
    changeCategory: (data) => dispatch( actions.changeCategory(data))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
