import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <div className="navbar shadow-xl bg-base-500">
                <div className="flex-1">
                    <a className=" header">Knowledge Cafe</a>
                </div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-20  rounded-full">
                    <img src="../../../public/header.jpg" />
                </div>
                </label>
            </div>
        </div>
    );
};

export default Header;