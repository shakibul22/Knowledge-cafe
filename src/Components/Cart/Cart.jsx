import React, { useState } from 'react';
import "./Cart.css"
const Cart = (props) => {

  
    
    return (
        
            <div className='cart'>
                <div className='cart-counter p-8 shadow-xl mb-5'>
                <h1>Spend time on read: {props.time} min</h1>
                </div>
                <div className=' shadow-lg p-8 text-xl '>
                    <p>Book Marked Blogs:{props.title}</p>
                </div>
            </div>
           
    );
};

export default Cart;