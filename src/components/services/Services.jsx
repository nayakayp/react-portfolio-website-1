import React from 'react'
import './services.css'
import {BsFillCheckSquareFill} from 'react-icons/bs'

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services__container'>
                <article className='service'>
                    
                    {/* SERVICE 1 : Data Processing as a Service */}
                    <div className='service__head'>
                        <h3>Data Processing as a Service</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BsFillCheckSquareFill className='service__list-icon' />
                            <p>Data Platform/Architect Consultation</p>
                        </li>
                        <li>
                            <BsFillCheckSquareFill className='service__list-icon' />
                            <p>Query Consultation</p>
                        </li>
                        <li>
                            <BsFillCheckSquareFill className='service__list-icon' />
                            <p>Machine Learning Model Development</p>
                        </li>
                        <li>
                            <BsFillCheckSquareFill className='service__list-icon' />
                            <p>Data Cleansing</p>
                        </li>
                        <li>
                            <BsFillCheckSquareFill className='service__list-icon' />
                            <p>Data Visualization - Looker Studio</p>
                        </li>
                        <li>
                            <BsFillCheckSquareFill className='service__list-icon' />
                            <p>Data Visualization - Tableau</p>
                        </li>
                    </ul>
                </article>
                    
                    {/* SERVICE 2 : Web Development */}

                <article className='service'>
                    <div className='service__head'>
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BsFillCheckSquareFill className='service__list-icon' />
                            <p>Web Development</p>
                        </li>
                        <li>
                            <BsFillCheckSquareFill className='service__list-icon' />
                            <p>Web Maintenance</p>
                        </li>
                    </ul>
                </article>

                    {/* SERVICE 3 : Career Preparation */}

                <article className='service'>
                    <div className='service__head'>
                        <h3>Career Preparation</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BsFillCheckSquareFill className='service__list-icon' />
                            <p>CV Consultation</p>
                        </li>
                        <li>
                            <BsFillCheckSquareFill className='service__list-icon' />
                            <p>101 Mentoring for Data Analyst</p>
                        </li>
                        <li>
                            <BsFillCheckSquareFill className='service__list-icon' />
                            <p>Problem Solving Method</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services