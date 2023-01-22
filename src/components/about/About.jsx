import React from 'react'
import './about.css'
import ME from '../../assets/TAM Innovation Campaign Square.png'
import {FaAward} from 'react-icons/fa'
import {DiGoogleAnalytics} from 'react-icons/di'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        
                        {/* experience info 1*/}
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3.5+ Years Working Experience</small>
                        </article>

                        {/* experience info 2 */}
                        <article className='about__card'>
                            <DiGoogleAnalytics className='about__icon'/>
                            <h5>Analysis</h5>
                            <small>50+ Cases</small>
                        </article>

                        {/* experience info 2 */}
                        <article className='about__card'>
                            <AiOutlineFundProjectionScreen className='about__icon'/>
                            <h5>Dashboard</h5>
                            <small>100+ Dashboards</small>
                        </article>

                    </div>

                    <p className='about__desc'>
                    Practiced data analyst and enabler (project manager) with 3.5 years of experience in enabling environment analytics, interpreting data in growing businesses, and providing recommendations to boost business revenues either in the largest automotive in Indonesia (Toyota-Astra Motor) or money transfer in Indonesia (Flip).   
                    </p>

                    <p className='about__desc_point'>
                    Proficient in various data tools such as SQL, Python, data visualization tools (Redash, Looker, Tableau), CRM tools (Amplitude, Appsflyer), and spreadsheets. Enjoy collaboration with various stakeholders, starting from BoD, product, marketing, and business team with strong business acumen to drive decisions in a data-driven manner.
                    
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Discuss</a>
                </div>
            </div>
        </section>
    )
}

export default About
