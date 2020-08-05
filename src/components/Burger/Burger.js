import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
            .map(el => {
                return [...Array(props.ingredients[el])].map((_, i)=>{
                    return <BurgerIngredient key={el + i} type={el}  />
                });
            }); //take the keys of an object and create an array
    
            return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;