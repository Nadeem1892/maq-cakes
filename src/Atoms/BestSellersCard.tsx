import React from 'react'

type BestSellersCardProps = {
  image: string, // assuming `image` is a string (URL of the image)
  price:number,
  offerPrice:number,
  discount:string,
  title:string
};

const BestSellersCard = ({image, price, offerPrice, discount, title}:BestSellersCardProps) => {
  return (
    <div className="flex flex-col gap-2 overflow-hidden bg-white rounded-lg shadow-2xl">
    <div className=" bg-gray-200 w-full lg:h-[200px] h-40 rounded-t-lg transition-transform overflow-hidden duration-300 hover:scale-105">
        <img className='w-full h-full' src={image} alt="" />
    </div>
    <div className="category uppercase truncate text-[0.8em] font-semibold text-blue-500 pt-1 pb-0 px-1 hover:cursor-pointer">{title}</div>
    <div className="flex items-center gap-2 px-2">
        <span className="font-semibold text-[16px] text-[#251d34]">₹ {price} </span>
        <span className=" text-[13px] line-through">₹ {offerPrice}</span>
        <span className=" text-[13px] font-medium text-[#1c9550]">{discount}% OFF</span>
        </div>

        <div className='px-2 mb-2'>
            <span className="text-[12px] text-[#1c2120] font-medium">4.9<span className='text-yellow-500'>★</span> </span>
            <span className="text-[12px] text-[#1c2120] font-medium">(3319 reviews) </span>
            </div>
</div>

  )
}

export default BestSellersCard