import React from "react";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img1.jpg';
import ProductsCard from '../layouts/ProductsCard'

const Products = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-slate-400 ">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        Our Products
      </h1>

      <div className=" flex flex-col lg:flex-row gap-12 justify-center">
        <ProductsCard img={img1}/>
        <ProductsCard img={img2}/>
        <ProductsCard img={img3}/>
        
      </div>
    </div>
  );
};

export default Products;