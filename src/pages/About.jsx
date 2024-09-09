import React, { useEffect, useState } from 'react'
import AboutBg from '../images/nikeAbout-bg.png'

const About = () => {
  const [TransformIndex, setTransformIndex] = useState(0)
  const GlanceContentArray = ["of NIKE’s leadership positions are held by women.", "renewable energy in owned or operated facilities, up from 48% in FY20.", "invested in NIKE, Inc.'s fiscal year 2021 to drive positive impact in communities around the world."]
  const [GlanceContent, setGlanceContent] = useState("")
  const TypingEffect = () => {
    let GalanceIndex = 0
    let words = 0
    let speed = 3000/ GlanceContentArray[GalanceIndex].length 
    let textDeleting = false
    const TypeText = () => {
      setGlanceContent(GlanceContentArray[GalanceIndex].substring(0, words))
      if (textDeleting) {
        if (words === 0) {
          if (GalanceIndex === GlanceContentArray.length - 1) {
            GalanceIndex = 0
          } else {
            GalanceIndex++
          }
          textDeleting=false
        } else {
          words--
        }
        speed = 3000/ GlanceContentArray[GalanceIndex].length 
      } else { words++ }
      if (words >= GlanceContentArray[GalanceIndex].length) {
        textDeleting=true
        speed = 3000
      }
      setTimeout(() => TypeText(), textDeleting ? speed/3 : speed );
    }
    TypeText()
  }
  useEffect(() => {
    TypingEffect()
    const interval = setInterval(() => {
      setTransformIndex(prevIndex => {
        if (prevIndex === 2) { return 0 }
        else return prevIndex + 1
      })
    }, 5700);
    return () => clearInterval(interval);
  }, [])
  return (
    <div className="w-full h-full bg-white flex flex-col items-center text-white pt-20 text-5xl max-sm:text-3xl gap-3 font-bold page">
      <img src={AboutBg} alt="" className='fixed w-full h-full top-0 left-0 -z-10 object-cover'/>
      <h1>About us</h1>
      <div className='flex flex-row justify-center w-4/5'>
        <div className='w-full text-xl font-semibold flex flex-col gap-4 bg-black shadow-lg shadow-yellow-500 bg-opacity-50 p-4 rounded-xl'>
          <p className=''>NIKE, Inc. is a team comprised of the Nike, Jordan and Converse brands driven by a shared purpose to leave an enduring impact.</p>
          <p>With a global footprint, culture of innovation and team-first mentality, we take action to create a future of continual progress for athletes, sport and our world.</p>
          <div className='flex flex-col gap-4'>
            <h1 className='text-3xl font-bold'>At a Glance</h1>
            <div className='w-full bg-yellow-100 p-4 flex flex-col gap-2 text-black rounded-xl shadow-inner shadow-black'>
              <div className=' w-96 max-sm:w-full overflow-hidden '>
                <div className='flex flex-row justify-between per-slide' style={{ transform: `translateX(-${TransformIndex * 75}vw)` }}>
                  <h1 className='text-8xl max-md:text-4xl font-extrabold w-1/4 text-left'>43%</h1>
                  <h1 className='text-8xl max-md:text-4xl font-extrabold w-1/4 text-left'>78%</h1>
                  <h1 className='text-8xl max-md:text-4xl font-extrabold w-1/4 text-left'>$97.7M</h1>
                </div>
              </div>
              <p className='text-xl font-semibold GlanceTyping'>{GlanceContent}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
