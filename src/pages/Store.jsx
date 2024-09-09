import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import StoreItem from '../components/StoreItem'
const Store = () => {
  const ShoesArray = useSelector(state => state.ShoeReducer.value)
  return (
    <div className="w-full page pt-16 h-fit pb-5 min-h-full bg-gray-300 gap-3 flex flex-col items-center text-3xl font-bold overflow-x-hidden">
      <h1>Store</h1>
      <div className='w-full h-full flex flex-row flex-wrap gap-3 justify-center'>
        {ShoesArray.map((value, index) => {
          return (
            <StoreItem value={value} index={index} />
          )
        })}
      </div>
    </div>
  )
}
export default Store
