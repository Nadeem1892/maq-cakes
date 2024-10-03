import React from 'react'

function Skeleton() {
  return (

<div className="flex flex-col w-56 h-64 gap-4 p-4 bg-neutral-300 animate-pulse rounded-xl">
  <div className="w-full h-32 rounded-md bg-neutral-400/50 animate-pulse"></div>
  <div className="flex flex-col gap-2">
    <div className="w-full h-4 rounded-md bg-neutral-400/50 animate-pulse"></div>
    <div className="w-4/5 h-4 rounded-md bg-neutral-400/50 animate-pulse"></div>
    <div className="w-full h-4 rounded-md bg-neutral-400/50 animate-pulse"></div>
    <div className="w-2/4 h-4 rounded-md bg-neutral-400/50 animate-pulse"></div>
  </div>
</div>
  )
}

export default Skeleton