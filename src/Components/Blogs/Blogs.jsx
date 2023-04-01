import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import "./Blogs.css"

const Blogs = () => {

    const [blogs, setblogs] = useState([])
    const [cart, setCart] = useState(0)
    const [time, setTime] = useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setblogs(data))
    }, []);
    const handleAddToCart=(blog)=>{
        const newCart=[...cart,blog];
        setCart(newCart);

    }
    const totalTime = (blog) => {
        setTime(time + blog.timeToRead)
    }
    return (
        <div className='body-container  mt-5 '>
            <div className='blog-container shadow-xl p-3'>
                {blogs.map((blog) => <Blog key={blog.id}
                    blog={blog}
                    totalTime={totalTime}></Blog>)}
            </div>

            <div className='cart-container'>
                <Cart cart={cart} time={time}></Cart>
            </div>

        </div>
    );
};

export default Blogs;