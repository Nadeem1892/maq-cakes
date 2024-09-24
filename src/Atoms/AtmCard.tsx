
type Props = {
    cakeImg:string,
    heading:string
}

function AtmCard({cakeImg,heading}: Props) {
   
  return (
    <div className='bg-pink-100 relative rounded-lg h-[180px] shadow-xl cursor-pointer flex flex-col justify-around  w-full'>
        <div className='flex justify-center w-full bg-indigo-900 '>
        <img className='absolute h-72 bottom-1' src={cakeImg} alt="" />
        </div>
        <div className='flex items-center justify-center w-full t'>
        <h1 className='text-[25px] text-gray-800 font-semibold'>{heading}</h1>
        </div>
    </div>
  )
}

export default AtmCard