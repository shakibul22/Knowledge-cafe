import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../Utilities/fakedb';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import "./Blogs.css"

const Blogs = () => {

    const [blogs, setblogs] = useState([])
    const [cart,setCart] =useState([]);
    const [bookMarkCount, setBookMarkCount] = useState(0);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setblogs(data))
    }, []);
    useEffect(()=>{
        const storedCart=getShoppingCart();
        console.log(storedCart);
      
    })
    const handleAddToCart=(blog)=>{
        const newCart=[...cart,blog];
        setCart(newCart);
        addToDb(blog.id);
        
    }
   
    return (
        <div className='body-container mt-5 '>
            <div className='blog-container shadow-xl p-5'>
                {blogs.map((blog) => <Blog key={blog.id}
                    blog={blog}
                    handleAddToCart={handleAddToCart}></Blog>)}
            </div>
         
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Blogs;