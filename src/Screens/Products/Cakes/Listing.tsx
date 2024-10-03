import React from 'react'
import BestSellersCard from '../../../Atoms/BestSellersCard'

type Props = {}

export default function Listing({}: Props) {
  return (
    <div className="grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-6">
    <BestSellersCard tital={"Chocolate Truffle Cake"} price={749} offerPrice={999} discount={"19%"}  image={"https://bkmedia.bakingo.com/black-forest-cake0001chbl-AAA.jpg?tr=h-265,w-265?tr=w-266,dpr-1.5,q-70"}/>
    <BestSellersCard tital={"Chocolate Truffle Cake"} price={749} offerPrice={999} discount={"19%"}  image={"https://bkmedia.bakingo.com/kitkat-chocolate-cake-cake1119choco-AAA.jpg?tr=h-265,w-265?tr=w-266,dpr-1.5,q-70"} />
    <BestSellersCard tital={"Chocolate Truffle Cake"} price={749} offerPrice={999} discount={"19%"}  image={"https://bkmedia.bakingo.com/fresh-fruit-cake0014frui-AAA.jpg?tr=h-265,w-265?tr=w-266,dpr-1.5,q-70"} />
    <BestSellersCard tital={"Chocolate Truffle Cake"} price={749} offerPrice={999} discount={"19%"}  image={"https://bkmedia.bakingo.com/choco-vanilla-cake0006chva-AAA.jpg?tr=h-265,w-265?tr=w-266,dpr-1.5,q-70"} />
    <BestSellersCard tital={"Chocolate Truffle Cake"} price={749} offerPrice={999} discount={"19%"}  image={"https://bkmedia.bakingo.com/choco-truffle-cake0005choc-a.jpg?tr=h-265,w-265?tr=w-266,dpr-1.5,q-70"} />
    <BestSellersCard tital={"Chocolate Truffle Cake"} price={749} offerPrice={999} discount={"19%"}  image={"https://bkmedia.bakingo.com/black-forest-cake0001chbl-AAA.jpg?tr=h-265,w-265?tr=w-266,dpr-1.5,q-70"}/>
    <BestSellersCard tital={"Chocolate Truffle Cake"} price={749} offerPrice={999} discount={"19%"}  image={"https://bkmedia.bakingo.com/kitkat-chocolate-cake-cake1119choco-AAA.jpg?tr=h-265,w-265?tr=w-266,dpr-1.5,q-70"} />
    <BestSellersCard tital={"Chocolate Truffle Cake"} price={749} offerPrice={999} discount={"19%"}  image={"https://bkmedia.bakingo.com/fresh-fruit-cake0014frui-AAA.jpg?tr=h-265,w-265?tr=w-266,dpr-1.5,q-70"} />
    <BestSellersCard tital={"Chocolate Truffle Cake"} price={749} offerPrice={999} discount={"19%"}  image={"https://bkmedia.bakingo.com/choco-vanilla-cake0006chva-AAA.jpg?tr=h-265,w-265?tr=w-266,dpr-1.5,q-70"} />
    <BestSellersCard tital={"Chocolate Truffle Cake"} price={749} offerPrice={999} discount={"19%"}  image={"https://bkmedia.bakingo.com/choco-truffle-cake0005choc-a.jpg?tr=h-265,w-265?tr=w-266,dpr-1.5,q-70"} />
    <BestSellersCard tital={"Chocolate Truffle Cake"} price={749} offerPrice={999} discount={"19%"}  image={"https://bkmedia.bakingo.com/choco-truffle-cake0005choc-a.jpg?tr=h-265,w-265?tr=w-266,dpr-1.5,q-70"} />
    <BestSellersCard tital={"Chocolate Truffle Cake"} price={749} offerPrice={999} discount={"19%"}  image={"https://bkmedia.bakingo.com/choco-truffle-cake0005choc-a.jpg?tr=h-265,w-265?tr=w-266,dpr-1.5,q-70"} />
  </div>
  )
}