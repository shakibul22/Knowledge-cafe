import React, { useState } from 'react';
import "./Cart.css"
const Cart = (props) => {
  const carts = props.cart;
  console.log(carts);
  return (
    <div className='cart'>
      <div className='cart-counter p-8 shadow-xl mb-5'>
        <h1>Spend time on read: {props.time} min</h1>
      </div>
      <div className=' shadow-lg p-8 text-xl '>
       <h3 className='bookmark-container'>Bookmarked Blogs:{carts.length}</h3>
        {
          carts.map(cart => <p className='shadow-xl'>{cart.title}</p>)
        }
      </div>
    </div>

  );
};


export default Cart;