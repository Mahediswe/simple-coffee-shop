import React from 'react';
import img from '../assets/img1.jpg'
import Button from '../layouts/Button';

const About = () => {
  return (
    <div className='min-h-screen flex flex-col items center justify-center bg-slate-400'>
        <h1 className='font-semibold text-center text-4xl'>About Us</h1>
        <div className='flex flex-col lg:flex-row items-center gap-5'>
            <div className='w-full lg:w-2/4'>
                <img className='rounded-lg' src={img} alt="img" />
            </div>
            <div className='w-full lg:w-2/4 p-4 space-y-3'>
                <h2 className='font-semibold text-3xl'>What makes our coffee special?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam maxime fugit labore odio explicabo culpa 
                    eveniet officia saepe voluptates sunt!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Tempore, quibusdam architecto. Praesentium iste blanditiis impedit!</p>

                    <Button title='Learn More '/>
            </div>
        </div>
    </div>
  )
}

export default About