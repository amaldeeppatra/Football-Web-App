import React from 'react'

const Card = () => {
  return (
    <div className='ml-9 relative text-center'>
      <img className='opacity-60 z-10 h-72 w-96 rounded-[25px]' src="src\resources\valverde.jpg" alt="" />
      <div className='w-86 absolute top-0 left-0 mt-40'>
        <h2 className='text-white z-20'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quo necessitatibus vitae nemo? Hic necessitatibus quos nobis tempore animi eaque inventore et quibusdam blanditiis, consequuntur recusandae harum eveniet ipsum quasi!</h2>
      </div>
    </div>
  )
}

export default Card