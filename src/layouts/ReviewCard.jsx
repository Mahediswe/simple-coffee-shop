import React from 'react';
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";


const ReviewCard = (props) => {
  return (
    <div className=" flex flex-col  w-full p-3 rounded-lg gap-5 grid grid-cols-3">
        <div className=" flex flex-row items-center justify-center">
            
            <div>
                <h2 className='font-semibold text-lg'>{props.title} </h2>
               <div className='flex'>
                 <BsStarFill />
                 <BsStarFill  />
                 <BsStarHalf  />
               </div>
            </div>
            <span className='ml-16'>
                <FaQuoteRight size={42}/>
            </span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Neque odio at doloremque obcaecati officiis hic excepturi 
            minima esse voluptatum voluptate libero quos tempore 
            itaque quasi accusamus, minus adipisci perspiciatis ducimus.</p>
    </div>
  )
}

export default ReviewCard