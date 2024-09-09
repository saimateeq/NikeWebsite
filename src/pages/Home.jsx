import React from 'react'
import "../App.css"
import Shoes from '../components/Shoes'

const Home = () => {
    return (
        <div className="bg-gray-900 w-full h-screen page overflow-hidden">
            <h1 className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-bg'>NIKE</h1>
            <Shoes />
        </div>
    )
}

export default Home
