import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from '@material-ui/core';


import {get, changeCategory} from '../rtk-store/categories-slice';

function Categories(props) {

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

const mapDispatchToProps = {get, changeCategory}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
