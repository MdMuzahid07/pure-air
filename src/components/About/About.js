import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about-page-container'>
            <h1 className='text-5xl text-center text-white py-20'>Why Mac</h1>

            <img className='mx-auto pb-20' src="https://www.apple.com/v/macbook-air/n/images/why-mac/hero__f9jsr93e1jue_large.png" alt="" />
            

            <h1 className='text-center text-white text-3xl'>Easy to learn. Astoundingly powerful. Battery life beyond belief. Mac is designed to let you work, play, and create in ways you never imagined. It comes loaded with apps that are ready to go right out of the box. Free, regular software updates keep things up to date and running smoothly. And if you already have an iPhone, it feels familiar from the moment you turn it on.</h1>

            <img className='mx-auto py-20' src="https://www.apple.com/v/mac/shared/why-mac/d/images/overview/plays_nicely__brk18hjlople_large.jpg" alt="" />

            <h2 className='text-center text-2xl text-white py-20'>Works perfectly with all your Apple devices.</h2>
        </div>
    );
};

export default About;