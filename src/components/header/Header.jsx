import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'

import HeaderSocial from './HeaderSocials'

const Header = () => {
    return (
        // <div>Header</div>
        <header>
            <div className="container header_container">
                <h5> Hello I'm</h5>
                <h1> Achmad Rozie</h1>
                <h5 className='text-light'>
                    Analytics Engineer
                </h5>
                <CTA/>
                <HeaderSocial />
                <div className='me'>   
                    <img src ={ME} alt="me"/>
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>

            </div>
        </header>
    )
}

export default Header