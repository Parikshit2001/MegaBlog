import React from 'react'
import fire from '../../public/fire.jpg'

function Logo({width = '100px'}) {
  return (
    <div className='w-[100px] h-[100px]'>
      <img src={fire} alt="LOGO image" />
    </div>
  )
}

export default Logo