import SurpriseCard from "../Atoms/SurpriseCard"


const DesignerCakes = () => {
  return (
    <div className='grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-4'>
        <SurpriseCard image={"https://bkmedia.bakingo.com/barbie_1.jpg?tr=w-484,dpr-1.5,q-70"} lable={"Barbie Cakes"}/>
        <SurpriseCard image={"https://bkmedia.bakingo.com/baby-shower_0.jpg?tr=w-484,dpr-1.5,q-70"} lable={"Baby Shower Cakes"}/>
        <SurpriseCard image={"https://bkmedia.bakingo.com/jungle-theme-cake.jpg?tr=w-484,dpr-1.5,q-70"} lable={"Jungle Theme Cakes"}/>
        <SurpriseCard image={"https://bkmedia.bakingo.com/rainbow_cakes_desktop.jpg?tr=w-484,dpr-1.5,q-70"} lable={"Rainbow Cakes"}/>
    </div>
  )
}

export default DesignerCakes