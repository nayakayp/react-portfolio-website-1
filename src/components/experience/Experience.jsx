import React from 'react'
import './experience.css'
import {FaPython} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {BsFileEarmarkCode} from 'react-icons/bs'
import {HiOutlinePresentationChartBar} from 'react-icons/hi'
import {FiCodepen} from 'react-icons/fi'
import {BiTestTube} from 'react-icons/bi'
import {FiTrendingUp} from 'react-icons/fi'

import {FaReact} from 'react-icons/fa'
import {DiCss3} from 'react-icons/di'
import {DiJavascript} from 'react-icons/di'
import {SiApacheairflow} from 'react-icons/si'
import {DiSpark} from 'react-icons/di'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__analytics'>
                    <h3>Data Analytical Tools</h3>
                    <div className='experience__content'>


                        <article className='experience__details'>
                            <SiMysql className='experience__details-icon'/>
                            <div> 
                                <h4> MySQL </h4>
                                <small className='text-light'> Experienced </small>
                            </div> 
                            {/* <small className='text-light'>Experienced</small> */}
                        </article>

                        <article className='experience__details'>
                            <BsFileEarmarkCode className='experience__details-icon'/>
                            <div>
                                <h4> BigQuery </h4>
                                <small className='text-light'> Experienced </small>
                            </div>
                        </article>

                        <article className='experience__details'>                
                            <FaPython className='experience__details-icon'/>
                            <div>
                                <h4> Python </h4>
                                <small className='text-light'> Experienced </small>
                            </div>
                            {/* <small className='text-light'>Experienced</small> */}
                        </article>

                        <article className='experience__details'>
                            <HiOutlinePresentationChartBar className='experience__details-icon'/>
                            <div>
                                <h4> Redash </h4>
                                <small className='text-light'> Experienced </small>
                            </div>
                            {/* <small className='text-light'>Experienced</small> */}
                        </article>

                        <article className='experience__details'>
                            <FiCodepen className='experience__details-icon'/>
                            <div>
                                <h4> Looker Studio </h4>
                                <small className='text-light'> Intermediate </small>
                            </div>    
                            {/* <small className='text-light'>Experienced</small> */}
                        </article>

                        <article className='experience__details'>
                            <BiTestTube className='experience__details-icon'/>
                            <div>
                                <h4> A/B Test </h4>
                                <small className='text-light'> Intermediate </small>
                            </div> 
                            {/* <small className='text-light'>Experienced</small> */}
                        </article>

                        <article className='experience__details'>
                            <FiTrendingUp className='experience__details-icon'/>
                            <div>
                                <h4> Machine Learning </h4>
                                <small className='text-light'> Experienced </small>
                            </div>
                            {/* <small className='text-light'>Experienced</small> */}
                        </article>
                    </div>
                </div>

                <div className='experience__engineer'>

                    <h3>Data Engineer Tools</h3>
                    <div className='experience__content'>

                        <article className='experience__details'>
                            <DiCss3 className='experience__details-icon'/>
                            <div>
                                <h4> CSS </h4>
                                <small className='text-light'> Basic </small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <DiJavascript className='experience__details-icon'/>
                            <div>    
                                <h4> JavaScript </h4>
                                <small className='text-light'> Basic </small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <SiApacheairflow className='experience__details-icon'/>
                            <div>
                                <h4> Airflow </h4>
                                <small className='text-light'> Basic </small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <DiSpark className='experience__details-icon'/>
                            <div>
                                <h4> Spark </h4>
                                <small className='text-light'> Basic </small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <FaReact className='experience__details-icon'/>
                            <div>
                                <h4> React </h4>
                                <small className='text-light'> Basic </small>
                            </div>
                            {/* <small className='text-light'>Experienced</small> */}
                        </article>
                    </div>
                </div>
            </div>

            <div className='container experience__container_single'>
                <div className='experience__analaytical_platform'>
                    <h3>Analytical Platform Tools</h3>
                    <div className='experience__content_single'>


                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div> 
                                <h4> Amplitude </h4>
                                <small className='text-light'> Experienced </small>
                            </div> 
                            {/* <small className='text-light'>Experienced</small> */}
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4> Appsflyer </h4>
                                <small className='text-light'> Intermediate </small>
                            </div>
                        </article>

                        <article className='experience__details'>                
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4> Braze </h4>
                                <small className='text-light'> Basic </small>
                            </div>
                            {/* <small className='text-light'>Experienced</small> */}
                        </article>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience