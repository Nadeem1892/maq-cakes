import React from 'react'

type Props = {heading:String}

const Heading = ({heading}: Props) => {
  return (
    <>
    <h1 className='lg:text-[25px] text-[20px] text-gray-800 font-bold'>{heading}</h1>
    </>
  )
}

export default Heading