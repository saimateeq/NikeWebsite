import React, { useEffect, useRef, useState } from 'react'
import "../App.css"
import {useSelector} from "react-redux"

const Shoes = () => {
    const ShoesArray = useSelector(state => state.ShoeReducer.value)
    const [RingAni, setRingAni] = useState("Ring-Ani left-1/2 -translate-x-1/2")
    const [RingAni2, setRingAni2] = useState("left-1/2 -translate-x-1/2")
    const [MiniCardsAni, setMiniCardsAni] = useState("hidden")
    const [MiniCardsShow, setMiniCardsShow] = useState(false)
    const [InfoBarAniArray, setInfoBarAniArray] = useState(["w-0", "w-0", "w-0", "w-0"])
    const [InfoBarText, setInfoBarText] = useState("hidden")
    const [ShoeRing, setShoeRing] = useState('hidden')
    const [ShoeGoing, setShoeGoing] = useState("ShoeGoingAni")
    const [RingCloseAni, setRingCloseAni] = useState("RingCloseAni left-3per")
    const [InfoBarHidden, setInfoBarHidden] = useState(true)
    const [LastDisplay, setLastDisplay] = useState(0)
    const [NowDisplay, setNowDisplay] = useState(1)
    const [DisplayingShoes, setDisplayingShoes] = useState({ NowDisplayIndex: 1, LastDisplayIndex: -1, })
    const [SlideShowOn, setSlideShowOn] = useState(false)
    const SlideRef = useRef(null)
    const ShoeGoingFucn = (LastShoe) => {
        setInfoBarAniArray(["InfoBarClose", "InfoBarClose", "InfoBarClose", "InfoBarClose"])
        setShoeGoing("ShoeGoingAni")
        setMiniCardsShow(false)
        setInfoBarText("hidden")
        setTimeout(() => {
            setShoeGoing('hidden')
            setInfoBarHidden(true)
            setTimeout(() => {
                setRingCloseAni("hidden")
            }, 950);
        }, 700);
        setDisplayingShoes(prevArray => {
            if (!LastShoe === undefined) {
                setLastDisplay(LastShoe)
                return { NowDisplayIndex: -1, LastDisplayIndex: LastShoe }
            } else {
                setLastDisplay(prevArray.NowDisplayIndex)
                return { NowDisplayIndex: -1, LastDisplayIndex: prevArray.NowDisplayIndex }
            }
        })
    }
    const ShoeDisplayFunc = () => {
        setTimeout(() => {
            setInfoBarAniArray(["w-0", "w-0", "w-0", "w-0"])
            setInfoBarHidden(false)
            let index = -1
            const interval = setInterval(() => {
                setInfoBarAniArray(prevArray => {
                    prevArray[index] = "InfoBarAni"
                    return [...prevArray]
                })
                if (index === 3) {
                    setMiniCardsShow(true)
                    setTimeout(() => {
                        setMiniCardsAni("MiniCardsAni")
                        setShoeRing("semi-circle")
                    }, 300);
                    setInfoBarText("flex")
                    clearInterval(interval)
                }
                index++
            }, 300);
        }, 1500);
        setTimeout(() => {
            setRingAni("position-ring")
            setRingAni2("position-ring2")
        }, 1200);
    }
    const NowDisplayFunc = (index) => {
        setTimeout(() => {
            setDisplayingShoes(prevArray => {
                var DisplayingIndex = 0
                if (index !== undefined) {
                    setNowDisplay(index)
                    return { NowDisplayIndex: index, LastDisplayIndex: -1 }
                } else if (prevArray.LastDisplayIndex < 7) {
                    DisplayingIndex = prevArray.LastDisplayIndex + 1
                }
                setNowDisplay(DisplayingIndex)
                return { NowDisplayIndex: DisplayingIndex, LastDisplayIndex: -1 }
            })
            setRingCloseAni("RingCloseAni left-3per")
            setRingAni("Ring-Ani left-1/2 -translate-x-1/2")
            setRingAni2("left-1/2 -translate-x-1/2")
            ShoeDisplayFunc()
        }, 3000);
    }
    const SlideShowFunc = () => {
        setSlideShowOn(true)
        ShoeGoingFucn()
        NowDisplayFunc()
        SlideRef.current = setInterval(() => {
            ShoeGoingFucn()
            NowDisplayFunc()
        }, 8000);
    }
    const StopSlideFunc = () => {
        clearInterval(SlideRef.current)
        setSlideShowOn(false)
    }
    useEffect(() => {
        ShoeDisplayFunc()
    }, [])
    return (
        <div className='w-full overflow-hidden '>
            <button className='fixed SlideShowBtn sm:left-3/4 max-sm:left-1/2 bg-blue-400 p-3 pr-8 text-lg font-bold text-white rounded-full' onClick={() => {
                if (!SlideShowOn) { SlideShowFunc() }
                else { StopSlideFunc() }
            }}>Slide Show <i className={`${SlideShowOn ? "bi bi-pause-fill" : "bi bi-play-fill"} bg-white text-black py-3 px-4 p absolute text-3xl -top-1 rounded-full`}></i></button>
            {ShoesArray.map((value, index) => {
                return (
                    <div key={index} className='w-full'>
                        {index === DisplayingShoes.NowDisplayIndex || index === DisplayingShoes.LastDisplayIndex ?
                            <div className='flex flex-row w-full h-auto'>
                                <div className={`flex flex-row fixed -translate-y-1/2 top-1/2 max-sm:top-1/4 ${index === DisplayingShoes.NowDisplayIndex ? RingAni : RingCloseAni} `}>
                                    <div className={`w-1/2 h-full relative z-20 ${index === DisplayingShoes.NowDisplayIndex ? RingAni2 : "left-0"}`}>
                                        <div className={`h-full w-full inline-block gradient-border z-20 rounded-full`} style={{ "--Ring-Gradient": value.RingGradient }}>
                                            <div className='h-full w-full bg-gray-900 relative z-30 rounded-full'>
                                                <div className={`shoe-width absolute z-40 ${index === DisplayingShoes.LastDisplayIndex ? ShoeGoing : index === DisplayingShoes.NowDisplayIndex ? "ShoeDisplayingAni" : "hidden"}`}>
                                                    <img src={value.Link} alt="" className='w-full' />
                                                </div></div></div> </div>
                                    <div className={`w-1/2 ${InfoBarHidden ? 'hidden' : "flex"} flex-col justify-evenly z-10 -ml-24 max-lg:-ml-16 max-md:-ml-10 max-sm:-ml-8`} >
                                        <div className={`${InfoBarAniArray[0]} h-10 max-lg:h-8 max-md:h-6 max-sm:h-auto max-sm:min-h-6 max-sm:p-2 bg-black bg-opacity-40 rounded-r-full text-white text-center flex flex-row justify-center items-center max-md:text-sm max-sm:text-xs`}><p className={InfoBarText}>Name : {value.Discription.Name}</p></div>
                                        <div className={`${InfoBarAniArray[1]} h-10 max-lg:h-8 max-md:h-6 max-sm:h-auto max-sm:min-h-6 max-sm:p-2 bg-black bg-opacity-40 rounded-r-full  text-white text-center flex flex-row justify-center items-center max-md:text-sm max-sm:text-xs`}><p className={InfoBarText}>Price : {value.Discription.Price}</p></div>
                                        <div className={`${InfoBarAniArray[2]} h-10 max-lg:h-8 max-md:h-6 max-sm:h-auto max-sm:min-h-6 max-sm:p-2 bg-black bg-opacity-40 rounded-r-full  text-white text-center flex flex-row justify-center items-center max-md:text-sm max-sm:text-xs`}><div className={`${InfoBarText} w-full justify-end`}>Color :
                                            <div className='flex flex-row w-1/2 justify-evenly items-center'>
                                                {value.Discription.Colours.map((value, index) => {
                                                    return <div key={index} className={`w-5 h-5 max-sm:h-3 max-sm:w-3 rounded-full border-2 border-gray-400 ${value}`}></div>
                                                })}</div></div></div>
                                        <div className={`${InfoBarAniArray[3]} h-10 max-lg:h-8 max-md:h-6 max-sm:h-auto max-sm:min-h-6 max-sm:p-2 bg-black bg-opacity-40 rounded-r-full text-white text-center flex flexp-row justify-center items-center max-md:text-sm max-sm:text-xs`}><div className={`${InfoBarText} w-full justify-end`}>Size :
                                            <div className='flex flex-row w-1/2 justify-evenly'>
                                                {value.Discription.Size.map((value, index) => {
                                                    return <div key={index} className='w-7 h-7 max-md:w-5 max-md:h-5 rounded-full border-2 border-gray-400 bg-white text-gray-600 text-center text-sm flex justify-center items-center max-md:text-xs'>{value[0]}</div>
                                                })}</div></div></div></div></div></div> : <div></div>} </div>)
            })}
            <div className={`flex-col fixed items-center cards-position ${MiniCardsShow ? "flex" : "hidden"}`}>
                <div className='w-full h-full flex flex-col gap-2 ' style={{ "--Bg-Gradient": ShoesArray[NowDisplay].BgGradient }}>
                    <div className='perallelogram w-3/4 h-1/3  top-card bg-white'></div>
                    <div className='perallelogram w-3/4 h-1/3 bg-white'></div>
                    <div className='perallelogram w-3/4 h-1/3  bottom-card bg-white'></div>
                </div>
                {DisplayingShoes.NowDisplayIndex !== -1 ?
                    <div className={`w-full h-auto flex flex-col pics absolute ${MiniCardsAni}`}>
                        <img src={ShoesArray[DisplayingShoes.NowDisplayIndex].Face[0]} alt="" className={`w-full shoemini top-pic `} style={{ "--left": "auto" }} />
                        <img src={ShoesArray[DisplayingShoes.NowDisplayIndex].Face[1]} alt="" className={`w-full shoemini middle-pic absolute`} style={{ "--left": "-20%" }} />
                        <img src={ShoesArray[DisplayingShoes.NowDisplayIndex].Face[2]} alt="" className={`w-3/4 shoemini bottom-pic absolute`} style={{ "--left": "-38%" }} />
                    </div> : <div></div>}</div>
            <div className={`${ShoeRing} rounded-full fixed flex flex-col sm:top-1/2 -translate-y-1/2 max-sm:rotate-90 justify-center items-center`} style={{ "--Ring-Rotate-To": `-${NowDisplay * 45}deg`, "--Ring-Rotate-From": `-${LastDisplay * 45}deg` }}>
                <div className='flex flex-col absolute items-center justify-center h-1/2 w-1/2 rounded-full gradient-gray'>
                    <div className='small-circle bg-white rounded-full z-20 mr-auto '></div>
                    <div className='w-2/5 h-2/5 bg-gray-900 rounded-full fixed'></div>
                </div>
                <div className={`w-full h-full flex flex-col justify-center Ring-Rotate`}>
                    {ShoesArray.map((value, index) => {
                        return (
                            <div key={index} onClick={(event) => {
                                ShoeGoingFucn(LastDisplay)
                                NowDisplayFunc(index)
                            }} className={`bg-gray-100 p-2 rounded-md w-1/4 absolute shoe`} style={{ "--left": `${value.Position.left}`, "--top": `${value.Position.top}`, "--rotate": `${index * 45}deg`, }} >
                                <img src={value.Link} alt="" />
                            </div>)
                    })}</div></div></div>)
}
export default Shoes
