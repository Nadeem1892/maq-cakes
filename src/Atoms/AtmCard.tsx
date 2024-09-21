
type Props = {
    cakeImg:string,
    heading:string
}

function AtmCard({cakeImg,heading}: Props) {
    console.log(cakeImg)
  return (
    <div className='bg-pink-100 relative rounded-lg h-[180px] shadow-xl cursor-pointer flex flex-col justify-around  w-full'>
        <div className=' bg-indigo-900 flex justify-center w-full '>
        <img className=' h-72 absolute bottom-1' src={cakeImg} alt="" />
        </div>
        <div className=' w-full  flex justify-center items-center t'>
        <h1 className='text-[25px] text-gray-800 font-semibold'>{heading}</h1>
        </div>
    </div>
  )
}

export default AtmCard