import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center  px-5 ">
      <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">
        Our Menu
      </h1>

      <div className=" flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img={img1} title="Espresso" />
        <MenuCard img={img2} title="Cappuccino" />
        <MenuCard img={img2} title="Cappuccino" />
        <MenuCard img={img2} title="Cappuccino" />
        <MenuCard img={img2} title="Cappuccino" />
        <MenuCard img={img2} title="Cappuccino" />
      </div>
    </div>
  );
};

export default Menu;