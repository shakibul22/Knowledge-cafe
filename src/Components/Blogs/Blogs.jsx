import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import "./Blogs.css"

const Blogs = () => {

    const [blogs, setblogs] = useState([])
    const [cart,setCart] =useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setblogs(data))
    }, []);
    const handleAddToCart=(blog)=>{
        const newCart=[...cart,blog];
        setCart(newCart);
        
    }
   
    return (
        <div className='body-container  mt-5 '>
            <div className='blog-container shadow-xl p-3'>
                {blogs.map((blog) => <Blog key={blog.id}
                    blog={blog}
                    handleAddToCart={handleAddToCart}></Blog>)}
            </div>
         
            <div className='cart-container'>
                <h2>Selected:</h2>
                <Cart></Cart>
            </div>

        </div>
    );
};

export default Blogs;