import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { withRouter} from 'react-router-dom';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)//take the keys of an object and create an array
            .map(el => {
                return [...Array(props.ingredients[el])].map((_, i)=>{
                    return <BurgerIngredient key={el + i} type={el}  />
                });
            }).reduce((previous, current)=>{
                return previous.concat(current);
            }, []); 
            console.log(transformedIngredients);
            if(transformedIngredients.length === 0){
                transformedIngredients = <p>Please start adding ingredients</p>
            }
    
            return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
//the component surrounded with wirhRouter gains access to the httpprops, location, history, match