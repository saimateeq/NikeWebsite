import React, { useEffect, useState } from 'react'
import logo from "../images/nike-logo.png"
import { useNavigate } from 'react-router'
import {useDispatch} from "react-redux"
import { setMenuBar } from '../reducers/MenuBarReducer'


const Header = () => {
    const [MenuBarShow,setMenuBarShow] = useState(false)
    const [MenuBarHideClass,setMenuBarHideClass] = useState("hidden")
    const HeaderArray= ["Home","About","Store","Contact"]
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log(0);
        setMenuBarHideClass("MenuBarHide")
        setTimeout(()=>{
            setMenuBarHideClass("hidden")
        },1000)
    },[setMenuBarShow])
    return (
        <div className={`w-full flex flex-row bg-black bg-opacity-50 fixed top-0 p-4 max-sm:p-1 justify-between items-center z-50 `}>
            <div className='w-10 h-auto '>
                <img src={logo} alt="logo" />
            </div>
            <div className='text-white font-bold text-3xl p-0 hidden max-sm:block z-50'onClick={()=>{
                setMenuBarShow(prev=>{
                  return  !prev
                })
                }}>{MenuBarShow ? <i className="bi bi-x-lg"></i>: <i className="bi bi-list"></i>}</div>
            <div className='flex flex-row gap-5 text-gray-400 text-lg max-sm:hidden'>
                {HeaderArray.map((value, index) => {
                    let page = value
                    if(value==="Home"){page = ""}
                    return (
                        <li key={index} className='list-none' onClick={() => { navigate(`/${page}`) }}>{value}</li>
                    )
                })}
            </div>
            <div className={`sm:hidden MenuBar flex flex-col z-50 fixed top-10 bg-slate-900 text-gray-300 font-bold w-1/2 overflow-scroll ${MenuBarShow ? "MenuBarShow":"MenuBarHide"}`} >
                {HeaderArray.map((value, index) => {
                    let page = value
                    if(value==="Home"){page = ""}
                    return (
                        <li key={index} className='list-none w-full border-gray-600 border-b-2 p-2 py-6 ' onClick={() => { 
                            navigate(`/${page}`) 
                            dispatch(setMenuBar(false))
                        }}>{value}</li>
                    )
                })}
            </div>
            {MenuBarShow? <div className='bg-black bg-opacity-50 w-full h-full fixed top-0 left-0 z-40'></div>:<div className='hidden'></div>}
        </div>
    )
}

export default Header
