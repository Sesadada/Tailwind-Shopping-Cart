import React from 'react'
import imageOne from '../images/PLANTS1.jpg'
import imageTwo from '../images/PLANTS2.jpg'
import imageThree from '../images/PLANTS3.jpg'



const Content = () => {
    return (
        <>
        <div className='menu-card'>
            <img src={imageOne} alt="First plant" className="h-full rounded mb-20 shadow"/>
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Suburbia Fistibus</h2>
                <p className="mb-2">Poisonous plant for your guests</p>
                <span>$50</span>
            </div>
        </div>
        <div className='menu-card'>
            <img src={imageTwo} alt="First plant" className="h-full rounded mb-20 shadow"/>
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Angelica Cannibalis</h2>
                <p className="mb-2">Aggressive Leafs that make you cry</p>
                <span>$25</span>
            </div>
        </div>
        <div className='menu-card'>
            <img src={imageThree} alt="First plant" className="h-full rounded mb-20 shadow"/>
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Candidiasis demonicum</h2>
                <p className="mb-2">Deadly flowers for your brother</p>
                <span>$37</span>
            </div>
        </div>
        </>
    )
}

export default Content
