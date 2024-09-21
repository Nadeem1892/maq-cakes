import SurpriseCard from "../Atoms/SurpriseCard"


function TrendingCakes() {
  return (
    <div className='grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-4'>
        <SurpriseCard image={"https://bkmedia.bakingo.com/photo_pulling_cake_desktop.jpg?tr=w-484,dpr-1.5,q-70"} lable={"Photo Pulling Cakes"}/>
        <SurpriseCard image={"https://bkmedia.bakingo.com/pinata_cake_desktop.jpg?tr=w-484,dpr-1.5,q-70"} lable={"Pinata Cakes"}/>
        <SurpriseCard image={"https://bkmedia.bakingo.com/pull_me_up_cake_desktop.jpg?tr=w-484,dpr-1.5,q-70"} lable={"Pull Me Up Cakes"}/>
        <SurpriseCard image={"https://bkmedia.bakingo.com/bomb_cake_desktop.jpg?tr=w-484,dpr-1.5,q-70"} lable={"Bomb Cakes"}/>
    </div>
  )
}

export default TrendingCakes