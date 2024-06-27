import React from 'react'
import ReviewCard from '../layouts/ReviewCard'

const Review = () => {
  return (
    <div className='min-h-screen flex flex-col justify w-full px-5'>
        <h1 className='font-semibold text text-4xl mt-24'>Customers Reviews</h1>
        <div className='flex flex-col gap-5 justify-center py-4 my-8'>
            <ReviewCard title="Mahedi"/>
            <ReviewCard title="Hassan"/>
            <ReviewCard title="Mahedi"/>
        </div>
    </div>
  )
}

export default Review