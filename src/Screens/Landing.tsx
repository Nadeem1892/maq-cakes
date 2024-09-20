import React from 'react'
import MyCarousel from '../Components/MyCarousel'
import Heading from '../Atoms/Heading'
import SurpriseSection from '../Components/SurpriseSection'
import BestSellersSection from '../Components/BestSellersSection'

const Landing = () => {
  return (
    <div className='flex flex-col gap-10 mt-16 overflow-hidden lg:mt-5'>
    <MyCarousel/>

    <div className='flex flex-col gap-5 py-5'>
    <Heading heading={"Surprise Your Loved One"}/>
    <SurpriseSection/>
    </div>
    
    <div className='flex flex-col gap-5 py-5 bg-pink-50'>
    <Heading heading={"Our Best Sellers"}/> 
    <BestSellersSection/>  
    </div>
        
</div>
  )
}

export default Landing