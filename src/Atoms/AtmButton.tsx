import React from 'react'

type Props = {
    label:string
    costomClass:string
}

function AtmButton({label,costomClass}: Props) {
  return (
    <button className={`lg:bg-white bg-red-500  text-white py-2 ${costomClass} px-8 rounded-3xl lg:text-red-500 font-semibold border border-white lg:border-red-500 lg:hover:bg-red-400 lg:hover:text-white`}>{label}</button>
  )
}

export default AtmButton