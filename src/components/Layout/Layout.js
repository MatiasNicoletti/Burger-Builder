import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';

const layout = (props) => (
    <Auxiliary>
        <div>Toolbar, sidedrawer, backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Auxiliary>
); //parenthesis because it will not have logic

export default layout;