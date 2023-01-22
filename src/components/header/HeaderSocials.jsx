import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        < a href="https://www.linkedin.com/in/achmadrozie/" target="_blank"><BsLinkedin/></a>
        <a href="https://medium.com/@achmad.rozie" target='_blank'><FaMedium/></a>
        <a href="https://github.com/achmadrozie" target='_blank'><FaGithub/></a>
        {/* <a href="https://twitter.com" target='_blank'><FaTwitterSquare/></a> */}
    </div>
  )
}

export default HeaderSocials
