import React from 'react';

const Question = () => {
    return (
        <div className='question-container'>
            <div className='shadow-xl p-5'>
                <h3>1.What is the difference between state and props in React?</h3>
                <p>props are passed via component properties, they're not reactive. State are variables that react will react , updating the UI when values changes.</p>
            </div>
            <div className='shadow-xl p-5' >
                <h3>2.How does useState work?</h3>
                <p>The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.</p>
            </div>
            <div className='shadow-xl  p-5'>
                <h3>3.Purpose of useEffect other than fetching data.</h3>
                <p>useEffect is a React hook and we put at the bottom of the code to take priority at this block of the code</p>
            </div>
            <div className='shadow-xl p-5'>
                <h3>4.How Does React work?</h3>
                <p> React Native is an open-source JavaScript framework built on the React library. Developers use it to create cross-platform React apps for iOS and Android.</p>
            </div>
        </div>
    );
};

export default Question;