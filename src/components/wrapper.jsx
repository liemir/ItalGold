import React from 'react';
import Sneakers from './Sneakers';

const Wrapper = (props) => {

    return (
        <div className='items-wrapper'>
            <Sneakers drawerAdd = {props.drawerAdd} items = {props.items} cartItems = {props.cartItems} setCartItems = {props.setCartItems}/>
        </div>
    );
};

export default Wrapper;