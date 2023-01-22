import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/personal_web.png' 
import IMG2 from '../../assets/driver_prediction.png' 
import IMG3 from '../../assets/churned_prediciton.png' 

const data = [
    {
        id: 1,
        image: IMG1, 
        title: 'Personal Web Portfolio - React, JS, and CSS',
        github: 'https://github.com/achmadrozie/react-portfolio-website-1',
        explanation: 'XX'
    },
    {
        id: 2,
        image: IMG2, 
        title: 'Driver Supply Distribution Forecasting using Machine Learning (Ride-Hailing Company)',
        github: 'https://github.com/achmadrozie/Scotty-Prediction/',
        explanation: 'https://medium.com/@achmad.rozie/driver-supply-distribution-forecasting-for-higher-fulfillment-rate-using-machine-learning-694560893407'
    },
    {
        id: 3,
        image: IMG3, 
        title: 'Create Customer Churn Prediction in Telco Industry — Final Theses',
        github: 'https://github.com/achmadanr/Machine-Learning_Predicting-Customer-',
        explanation: 'https://medium.com/@achmad.rozie/ml-create-customer-churn-prediction-using-3-method-comparison-support-vector-machine-naive-c44d6a6f871a'
    }
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

        <div className='container portfolio__container'>

            {/* PORTFOLIO 1 */}
                {/* <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1} alt=""/>
                    </div>
                    
                    <h3>Driver Supply Distribution Forecasting for Higher Fulfillment Rate using Machine Learning (Ride-Hailing Company Case)</h3>
                    <div className='cta'>
                        <a href='https://github.com/achmadrozie/Scotty-Prediction/' className='btn' target='_blank'>Github</a>
                        <a href='https://medium.com/@achmad.rozie/driver-supply-distribution-forecasting-for-higher-fulfillment-rate-using-machine-learning-694560893407' className='btn btn-primary' target='_blank'>Case Explaination</a>
                    </div>
                </article> */}
            {/* PORTFOLIO 2 */}
                {/* <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG2} alt=""/>
                    </div>
                    
                    <h3>Create Customer Churn Prediction in Telco Industry — Final Theses</h3>           
                    <div className='cta'>
                        <a href='https://github.com/achmadanr/Machine-Learning_Predicting-Customer-' className='btn' target='_blank'>Github</a>
                        <a href='https://medium.com/@achmad.rozie/ml-create-customer-churn-prediction-using-3-method-comparison-support-vector-machine-naive-c44d6a6f871a' className='btn btn-primary' target='_blank'>Case Explaination</a>
                    </div>
                </article> */}
            {/* PORTFOLIO 3 */}
                {/* <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1} alt=""/>
                    </div>
                    
                    <h3>Driver Supply Distribution Forecasting for Higher Fulfillment Rate using Machine Learning (Ride-Hailing Company Case)</h3>
                    
                    <div className='cta'>
                    <a href='https://github.com/achmadrozie/Scotty-Prediction/' className='btn' target='_blank'>Github</a>
                    <a href='https://medium.com/@achmad.rozie/driver-supply-distribution-forecasting-for-higher-fulfillment-rate-using-machine-learning-694560893407' className='btn btn-primary' target='_blank'>Case Explaination</a>
                    </div>
                </article> */}

            
            {
                data.map(({id,image, title, github, explanation}) => {
                    return (
                    <article key={id} className='portfolio__item'>

                        <div className='portfolio__item-image'>
                            <img src={image} alt=""/>
                        </div>

                        <div className='portfolio__content'>
                            <div className="portfolio__content_container">
                                <h3>{title}</h3>
                                
                                <div className='cta'>
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={explanation} className='btn btn-primary' target='_blank'>Detail / Demo</a>
                                </div>
                            </div>
                        </div>   

           
                </article>
                    )
                }

                )
            }
            {/* ALTERNATIVE USING MAP CONST */}
        </div>
        </section>
        
    )
}

export default Portfolio