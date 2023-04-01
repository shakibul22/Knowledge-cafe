import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import "./Blog.css"

const Blog = (props) => {
    const { image, imageIcon,timeToRead, date, title,name} = props.blog;
    const totalTime= props.totalTime;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className="blog">
        <figure><img className='w-full rounded-md' src={image} alt="" /></figure>
        <div className="blog-body flex justify-between ">
            <div className='blog-info flex gap-5'>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                <div className="w-20  rounded-full">
                    <img src={imageIcon} />
                </div>
            </label>
            <div className='ml-3'>
                <p>{name}</p>
                <p>{date}</p>
            </div>
            </div>
           <div>
           <p className='bookmark-btn hover:text-orange-400'>{timeToRead} min read  <FontAwesomeIcon onClick={() => handleAddToCart(props.blog)} className="fa-xl"  icon={faBookmark} /></p>
        </div>
           </div>
        <div className='blog-info'>
            <h2 className='title  text-3xl mt-7 text-bolder'>{title}</h2>
            <h3>#beginner  #programming</h3>
            <p onClick={() => totalTime(props.blog)} className='cursor-pointer underline underline-offset-4 text-orange-500 mt-4'>Mark as read</p>
        </div>
    </div>
);
};
export default Blog;