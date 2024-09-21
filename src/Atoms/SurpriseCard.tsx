import React from 'react'

type Props = {lable:String, image:any}

const SurpriseCard = ({lable, image}: Props) => {
  return (
    <div className='flex flex-col items-center w-full h-full overflow-hidden'>
        <div className='flex flex-col items-center w-full'>
        <div className='w-full overflow-hidden rounded-2xl'>
        <img className='transition-transform duration-700 transform w-full lg:h-[220px] h-[150px] object-fill  rounded-2xl hover:scale-110' src={image} alt="" />
        </div>
        <div>
        <h1 className='text-lg font-semibold text-gray-800'>{lable}</h1>
        </div>    
        </div>
    </div>
  )
}

export default SurpriseCard