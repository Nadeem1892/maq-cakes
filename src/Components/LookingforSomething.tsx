import AtmCard from '../Atoms/AtmCard'
import pastries from '../Assets/pastries.png'
import brownies from '../Assets/brownies.png'
import cupCakes from '../Assets/cup_cakes.png'
import hampers from '../Assets/hampers.png'
import jarCakes from '../Assets/jar_cakes.png'
import cookies from '../Assets/cookies.png'



 const LookingforSomething = () => {
  return (
    <div className='grid grid-cols-1 gap-40 lg:gap-24 lg:grid-cols-3'>
    <AtmCard cakeImg={pastries} heading={'Pastries'}/>
    <AtmCard cakeImg={brownies} heading={'Brownies'}/>
    <AtmCard cakeImg={cupCakes} heading={'Cup Cakes'}/>
    <AtmCard cakeImg={hampers} heading={'Hampers'}/>
    <AtmCard cakeImg={jarCakes} heading={'Jar Cakes'}/>
    <AtmCard cakeImg={cookies} heading={'Cookies'}/>
</div>
  )
}

export default LookingforSomething