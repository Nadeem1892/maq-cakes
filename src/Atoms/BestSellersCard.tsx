import React from 'react'

function BestSellersCard() {
  return (
    <div className="flex flex-col gap-2  bg-white overflow-hidden rounded-lg shadow-2xl">
    <div className=" bg-gray-200 w-full h-[200px] rounded-t-lg transition-transform overflow-hidden duration-300 hover:scale-105">
        <img src="https://bkmedia.bakingo.com/sq-pineapple-cake0022pifr-AA_0.jpg?tr=h-265,w-265?tr=w-266,dpr-1.5,q-70" alt="" />
    </div>
    <div className="category uppercase truncate text-[0.8em] font-semibold text-blue-500 pt-1 pb-0 px-1 hover:cursor-pointer">Our Classic Chocolate Truffle Cake</div>
    <div className="flex items-center gap-2 px-2">
        <span className="font-semibold text-[16px] text-[#251d34]">₹ 549 </span>
        <span className=" text-[13px] line-through">₹ 599</span>
        <span className=" text-[13px] font-medium text-[#1c9550]">9% OFF</span>
        </div>

        <div className='px-2 mb-2'>
            <span className="text-[12px] text-[#1c2120] font-medium">4.9<span className='text-yellow-500'>★</span> </span>
            <span className="text-[12px] text-[#1c2120] font-medium">(3319 reviews) </span>
            </div>
</div>

  )
}

export default BestSellersCard