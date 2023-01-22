import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>ACHMAD ROZIE</a>
            <ul className='permalinks'>
                <li><a href='#'>Home</a> </li>
                <li><a href='#about'>About</a> </li>
                <li><a href='#experience'>Experience</a> </li>
                <li><a href='#services'>Services</a> </li>
                <li><a href='#portfolio'>Portfolio</a> </li>
                <li><a href='#blog'>Blog</a> </li>
                <li><a href='#testimonials'>Testimonial</a> </li>
                <li><a href='#contact'>Contact</a> </li>
            </ul>
        <div className='footer__socials'>
            <a href='https://www.linkedin.com/in/achmadrozie/' target='_blank'><FaLinkedin/></a>
            <a href="https://medium.com/@achmad.rozie" target='_blank'><FaMedium/></a>
            <a href="https://github.com/achmadrozie" target='_blank'><FaGithub/></a>
        </div>
        <div className='footer__copyright'>
            <small>&copy; Achmad Rozie | All rights reserved </small>
        </div>
        </footer>
    )
}

export default Footer