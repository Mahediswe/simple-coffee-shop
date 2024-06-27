import React, { useState } from "react";
import { Link } from "react-scroll";
import { SiCoffeescript } from "react-icons/si";
import Button from "../layouts/Button";

const Navbar = () => {
  
  return (
    <div className="fixed w-full z-10">
      <div>
        <div className=" flex flex-row justify-between p-5  px-5 bg-sky-500 ">
          <div className=" flex flex-row items-center cursor-pointer gap-2">
            <span>
              <SiCoffeescript size={25} />
            </span>
            <a href="home" className=" text-xl font-semibold">CafePulse</a>
          </div>

          <nav className="flex flex-row items-center text-lg font-medium gap-8">
            <Link to='home'className="group relative inline-block cursor-pointer hover:underline hover:text-white">
              Home
            </Link>

            <Link to='menu' className="group relative inline-block cursor-pointer hover:underline hover:text-white ">
              Menu 
            </Link>

            <Link to="about" className="group relative inline-block cursor-pointer hover:underline hover:text-white">
              About Us 
            </Link>

            <Link to="products" className="group relative inline-block cursor-pointer hover:underline hover:text-white">
              Products 
            </Link>

            <Link to="review" className="group relative inline-block cursor-pointer hover:underline hover:text-white">
              Reviews 
            </Link>
          </nav>

          
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;