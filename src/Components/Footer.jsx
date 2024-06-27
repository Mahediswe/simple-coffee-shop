import React from 'react'

const Footer = () => {
  return (
    <div className=' mt-8  bg-zinc-700 '>
        <div className='p-8  px-5 flex flex-row items-center gap-5 mt-3'>
            <div className='w-full'>
                <h1>Coffe Shop</h1>
                <p>Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Explicabo, voluptas.</p>
            </div>
            <div className=''>
                <h1>Links</h1>
                <nav className='flex flex-col gap-1 '>
                    <a className='transition all cursor-pointer hover:underline' href="menu">Menu</a>
                    <a className='transition all cursor-pointer hover:underline' href='about'>About US</a>
                    <a className='transition all cursor-pointer hover:underline' href='products'>Products</a>
                    <a className='transition all cursor-pointer hover:underline' href='review'>Reviews</a>

                </nav>
            </div>
            <div>
                <h1>Menu</h1>
                <p>Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Explicabo, voluptas.</p>
            </div>
            <div>
                <h1>Links</h1>
                <nav className='flex flex-col gap-1'>
                    <a className='transition all cursor-pointer' href='/'>Cappucciano</a>
                    <a className='transition all cursor-pointer' href='/'>About US</a>
                    <a className='transition all cursor-pointer' href='/'>Products</a>
                    <a className='transition all cursor-pointer' href='/'>Reviews</a>

                </nav>
            </div>
        </div>
    </div>
  )
}

export default Footer