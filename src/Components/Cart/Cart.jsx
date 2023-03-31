import React, { useState } from 'react';
import "./Cart.css"
const Cart = () => {
    const [readingTime, setReadingTime] = useState(177);
    const [bookMarkCount, setBookMarkCount] = useState(0);
   
  const handleRead = (time) => {
    setReadingTime((prevTime) => prevTime + time);
  };
    
    return (
        
            <div className='cart'>
                <div className='cart-counter p-8 shadow-xl mb-5'>
                <h1 >Spend time on read:<span id="markAsRead">{readingTime}</span> min</h1>
                </div>
                <div className=' shadow-lg p-8 text-xl '>
                    <p>Book Marked Blogs:</p>
                </div>
            </div>
           
    );
};

export default Cart;