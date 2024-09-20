import React from 'react'
import SurpriseCard from '../Atoms/SurpriseCard'


function SurpriseSection() {
  return (
    <div className='grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-4'>
        <SurpriseCard image={"https://bkmedia.bakingo.com/theme_cake_9.jpg?tr=w-484,dpr-1.5,q-70"} lable={"Theme Cakes"}/>
        <SurpriseCard image={"https://bkmedia.bakingo.com/photo_cake_desktop.jpg?tr=w-484,dpr-1.5,q-70"} lable={"Photo Cakes"}/>
        <SurpriseCard image={"https://bkmedia.bakingo.com/gourmet_cake_0.jpg?tr=w-484,dpr-1.5,q-70"} lable={"Gourmet Cakes"}/>
        <SurpriseCard image={"https://bkmedia.bakingo.com/regular_cake_1.jpg?tr=w-484,dpr-1.5,q-70"} lable={"Regular Cakes"}/>
    </div>
  )
}

export default SurpriseSection