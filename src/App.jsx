import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import About from './Components/About';
import Products from './Components/Products';
import Review from './Components/Review';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div>
      <Navbar/>
       
       <main>
        <div id='home'>
        <Home/>
        </div>
        <div id='menu'>
        <Menu/>
        </div>
        <div id='about'>
        <About/>
        </div>
        <div id='products'>
        <Products/>
        </div>
        <div id='review'>
        <Review/>
        </div>
        <div id='footer'>
        <Footer/>
        </div>
       </main>
    </div>
  )
}

export default App