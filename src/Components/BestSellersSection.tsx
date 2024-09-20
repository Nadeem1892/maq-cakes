import React from 'react'
import BestSellersCard from '../Atoms/BestSellersCard'


function BestSellersSection() {
  return (
  
  <div className="grid grid-cols-2 gap-5 p-4 lg:grid-cols-4  bg-red-400">
    <BestSellersCard />
    <BestSellersCard />
    <BestSellersCard />
    <BestSellersCard />
    <BestSellersCard />
    <BestSellersCard />
    <BestSellersCard />
    <BestSellersCard />
  </div>
  )
}

export default BestSellersSection