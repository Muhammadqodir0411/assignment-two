import React from 'react'
import './logo.css'

import leaf from '../../assets/leaf.png'
import dashboard from '../../assets/dashboard.png'
import sale from '../../assets/sale.png'
import start from '../../assets/start.png'
import community from '../../assets/community.png'
import explore from '../../assets/explore.png'
import paper from '../../assets/paper.png'
import privacy from '../../assets/privacy.png'
import settin from '../../assets/setting.png'




const logo = () => {
    return (
        <div className='logo-wrap mt-5'>
            <div className='flex gap-2 px-4'>
                <img src={leaf} alt="Leaf-img" width={42} height={36} />
                <h2 className='text-3xl'><strong>Treey</strong></h2>
            </div>
            <div>
                <div className='dashboard-box'>
                    <img src={dashboard} alt="sale-img" width={24} height={24} />
                    <p className='text-white'>Dashboard</p>
                </div>
                <div className='flex mt-4 px-3 gap-4'>
                    <img src={sale} alt="sale-img" width={24} height={24} />
                    <p className='text-zinc-300'><strong>Sale</strong></p>
                </div>
                <div className='flex mt-5 px-3 gap-4'>
                    <img src={start} alt="start-img" width={24} height={24} />
                    <p className='text-zinc-300'><strong>Favorite</strong></p>
                </div>
                <div className='flex mt-5 px-3 gap-4'>
                    <img src={community} alt="community-img" width={24} height={24} />
                    <p className='text-zinc-300'><strong>Community</strong></p>
                </div>
                <div className='flex mt-5 px-3 gap-4'>
                    <img src={explore} alt="explore-img" width={24} height={24} />
                    <p className='text-zinc-300'><strong>Explore</strong></p>
                </div>
                <div className='flex mt-36 px-3 gap-4'>
                    <img src={paper} alt="Paper-img" width={24} height={24} />
                    <p className='text-zinc-300'><strong>Document</strong></p>
                </div>
                <div className='flex mt-5 px-3 gap-4'>
                    <img src={privacy} alt="privacy-img" width={24} height={24} />
                    <p className='text-zinc-300'><strong>Privacy</strong></p>
                </div>


                <div className='flex px-3 gap-4 logout-box mb-5'>
                    <img src={settin} alt="setting-img" width={24} height={24} />
                    <p className='text-zinc-300'><strong>Setting</strong></p>
                </div>

            </div>
        </div>
    )
}

export default logo