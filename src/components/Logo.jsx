import React from 'react'
import fire from '../../public/fire.jpg'

function Logo({width = '100px'}) {
  return (
    <div className='h-40 w-40'>
      <img src={fire} alt="LOGO image" />
    </div>
  )
}

export default Logo