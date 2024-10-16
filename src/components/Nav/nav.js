import React from 'react'
import './nav.css'

import luppa from '../../assets/luppa.png'
import bell from '../../assets/bell.png'
import sittings from '../../assets/sittings.png'
import admin from '../../assets/admin.png'


const nav = () => {
  return (
    <>
      <div className='nav-container'>
        <div className='nav-input-box'>
          <img src={luppa} alt="luppa" width={16} height={16} />
          <input className='nav-input' type="text" placeholder='Search' />
        </div>

        <div className='flex gap-3'>
          <img src={bell} alt="bel-img" width={40} height={40} />
          <img src={sittings} alt="sittings-img" width={40} height={40} />
          <img src={admin} alt="admin-img" width={40} height={40} />

        </div>


      </div>
      <hr className='mt-5'/>
    </>
  )
}

export default nav