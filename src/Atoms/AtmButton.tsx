import React from 'react'

type Props = {
    label:string
    costomClass:string
}

function AtmButton({label,costomClass}: Props) {
  return (
    <button className={` py-2 ${costomClass} px-8 `}>{label}</button>
  )
}

export default AtmButton