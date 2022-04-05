import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {

    return (
        <div className='bg-neutral-700 py-5 home-container'>

            <h1 className='text-1xl text-center font-bold text-gray-300'>TODAY SOMETHING ON AIR</h1>

            <div className="image-and-text">
                <img className='py-5' src="https://www.apple.com/v/macbook-air/n/images/overview/hero_endframe__ea0qze85eyi6_large.jpg" alt="" />

                <h1 className='text-4xl text-center text-gray-300'>MacBook Air</h1>
                <h2 className='text-5xl mt-20 text-center text-gray-300'>Power. It’s in the Air.</h2>
                <h3 className='text-3xl my-5 mb-20 text-center text-gray-300'>Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. An advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.</h3>


                <img className='mx-auto' src="https://www.apple.com/v/macbook-air/n/images/overview/hero_icon__gkgkr96pgb2a_large.jpg" alt="" />

                <h2 className='text-3xl my-5 mb-20 text-center text-gray-300'>Supercharged by the Apple M1 chip</h2>
                <h2 className='text-3xl my-5 mb-20 text-center text-gray-100'>From $999


                <img className='my-20' src="https://www.apple.com/v/macbook-air/n/images/overview/apple_silicon_endframe__forvi6ykwn6m_large.jpg" alt="" />
</h2>
            </div>

            <div className="reviews">

                <h1 className='text-4xl text-white text-center'>What's our customers says!</h1>

            </div>

            <div className="see-all-reviews">
                    <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;