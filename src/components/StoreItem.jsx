import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
const StoreItem = ({ value, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [inView]);
    return (
        <div key={index} className={`w-1/5 max-md:w-1/4 max-sm:w-4/5 h-44 bg-white rounded-3xl store-item z-10 overflow-hidden Item ${isVisible ? "ShowStoreItem Visible" : ""}`} ref={ref} style={{ animationDelay: `${index * 0.3}s` }}>
            <div className='w-full h-full flex justify-center items-center z-10 '>
                <img src={value.Link} alt={value.Name} className='' />
            </div>
            <div className='blur-bg w-full h-full z-20 relative rounded-3xl left-0 '>
            </div>
            <div className='rounded-full flex flex-col gap-1 py-2 items-center rounded-b-none bg-stone-700 relative store-item-des z-30 text-white'>
                <p className='font-bold text-sm'>Name: <span className='font-normal'>{value.Discription.Name}</span></p>
                <p className='font-bold text-sm'>Price: <span className='font-normal'>{value.Discription.Price}</span></p>
                <div className='font-bold text-sm flex gap-2 flex-row justify-center items-center'>Color:
                    {value.Discription.Colours.map((value, index) => {
                        return <div key={index} className={`w-5 h-5 max-sm:h-3 max-sm:w-3 rounded-full ${value}`}></div>
                    })}
                </div>
                <div className='font-bold text-sm flex gap-2 flex-row justify-center items-center '>Size
                    {value.Discription.Size.map((value, index) => {
                        return <div key={index} className={`w-5 min-w-5 h-fit min-h-5 max-md:w-fit flex flex-col justify-center items-center max-sm:h-3 max-sm:w-3 bg-gray-100 rounded-full text-black font-normal text-xs`}>
                            <p className=''>{value}</p></div>
                    })}
                </div>
            </div>
        </div>
    )
}
export default StoreItem
