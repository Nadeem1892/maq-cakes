import React from 'react'
import AtmButton from '../Atoms/AtmButton'



const Flavours = () => {
  return (
    <div className='grid grid-cols-2 gap-5 lg:grid-cols-8'>
        <AtmButton label='Chocolate' costomClass='rounded lg:bg-white  lg:text-red-500 font-semibold border border-red-500 lg:border-red-500 lg:hover:bg-red-500 lg:hover:text-white  text-red-500  rounded lg:text-red-500 font-semibold border border-white lg:border-red-500 lg:hover:bg-red-400 lg:hover:text-white'/>
        <AtmButton label='Fruits' costomClass=' rounded lg:bg-white  lg:text-red-500 font-semibold border border-red-500 lg:border-red-500 lg:hover:bg-red-500 lg:hover:text-white  text-red-500  rounded lg:text-red-500 font-semibold border border-white lg:border-red-500 lg:hover:bg-red-400 lg:hover:text-white'/>
        <AtmButton label='Red Velvet' costomClass=' rounded lg:bg-white  lg:text-red-500 font-semibold border border-red-500 lg:border-red-500 lg:hover:bg-red-500 lg:hover:text-white  text-red-500  rounded lg:text-red-500 font-semibold border border-white lg:border-red-500 lg:hover:bg-red-400 lg:hover:text-white'/>
        <AtmButton label='Strawberry' costomClass=' rounded lg:bg-white  lg:text-red-500 font-semibold border border-red-500 lg:border-red-500 lg:hover:bg-red-500 lg:hover:text-white  text-red-500  rounded lg:text-red-500 font-semibold border border-white lg:border-red-500 lg:hover:bg-red-400 lg:hover:text-white'/>
        <AtmButton label='Blackforest' costomClass=' rounded lg:bg-white  lg:text-red-500 font-semibold border border-red-500 lg:border-red-500 lg:hover:bg-red-500 lg:hover:text-white  text-red-500  rounded lg:text-red-500 font-semibold border border-white lg:border-red-500 lg:hover:bg-red-400 lg:hover:text-white'/>
        <AtmButton label='Pineapple' costomClass=' rounded lg:bg-white  lg:text-red-500 font-semibold border border-red-500 lg:border-red-500 lg:hover:bg-red-500 lg:hover:text-white  text-red-500  rounded lg:text-red-500 font-semibold border border-white lg:border-red-500 lg:hover:bg-red-400 lg:hover:text-white'/>
        <AtmButton label='Butterscotch' costomClass=' rounded lg:bg-white  lg:text-red-500 font-semibold border border-red-500 lg:border-red-500 lg:hover:bg-red-500 lg:hover:text-white  text-red-500  rounded lg:text-red-500 font-semibold border border-white lg:border-red-500 lg:hover:bg-red-400 lg:hover:text-white'/>
        <AtmButton label='Kit Kat' costomClass=' rounded lg:bg-white  lg:text-red-500 font-semibold border border-red-500 lg:border-red-500 lg:hover:bg-red-500 lg:hover:text-white  text-red-500  rounded lg:text-red-500 font-semibold border border-white lg:border-red-500 lg:hover:bg-red-400 lg:hover:text-white'/>
    </div>
  )
}

export default Flavours