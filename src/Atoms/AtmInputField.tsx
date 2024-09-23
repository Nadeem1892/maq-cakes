import React from 'react'

type Props = {
    type:string,
    id:string,
    label:string
}

function AtmInputField({type,id,label}: Props) {
  return (
<div className="relative w-full mx-auto my-6">
  <input
    type={type}
    id={id}
    required
    className="w-full text-lg text-slate-500 border-b-2 border-gray-500 bg-transparent outline-none focus:ring-0 peer"
  />
  <label
    htmlFor={id}
    className="absolute top-0 left-0 text-gray-400 transition-all duration-300 ease-in-out pointer-events-none peer-focus:top-[-20px] peer-valid:top-[-20px] peer-focus:text-gray-800 peer-valid:text-gray-800 peer-focus:text-sm peer-valid:text-sm"
  >
    {label}
  </label>
  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-800 scale-x-0 transition-all duration-300 ease-in-out peer-focus:bg-blue-500 peer-valid:bg-green-500 peer-focus:scale-x-100 peer-valid:scale-x-100"></div>
</div>

  
  )
}

export default AtmInputField