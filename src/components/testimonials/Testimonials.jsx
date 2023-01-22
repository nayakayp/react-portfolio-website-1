import React from 'react'
import './testimonials.css'
import AVTR2 from '../../assets/desty.jpeg'
import AVTR1 from '../../assets/diandra.jpeg'

// Import Swiper React components
import { Swiper, SwiperSlide, Navigation } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const data = [
    {
        avatar: AVTR1,
        name: 'Diandra Epifania K.',
        job: "Project Management Professional | ex-Toyota & Jardines",
        review: "I had the pleasure having Rozie as my team member back in 2019 - early 2020. As a new recruit, Rozie brought valuable hard skills in data mining and logical thinking, which allowed him to contribute greatly to the team's achievement.",
        review2: "Moreover, Rozie's skills in empathic listening, as well as his sense of urgency, maturity, and extraordinary drive allowed him not only to understand what was expected from him, but also to deliver outstanding results beyond what was expected. He was a reliable and valuable team member and it is my hope for him to keep growing as a business professional."
    },
    {
        avatar: AVTR2,
        name: 'Desty Lilian P.',
        job: "Talent Acquisition at Sunday | Career Coach at Revou",
        review: "It's not easy to find someone as talented as Rozie. He was once my mentee for career mentoring especially how to make a resume and prepare to change jobs. Finally he get a job at the company he wanted. I've observed him for a long time, and he has always strived to go above and beyond.",
        review2:" His passion and tenacity for getting the right data to answer business-critical questions is inspiring. He has a very clear understanding on how data can help a business increase revenue and he has very good ideas on what data to use. I would never hesitate to recommend Rozie for Data Analyst position he sets his eyes to."
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from my Supervisor, Mentor, and Client</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials__container'
                    pagination={{
                        dynamicBullets: true,
                    }}
                    spaceBetween= {30}
                    modules={[Pagination]}
                >
                
               { data.map(({avatar, name, job, review, review2}, index) => {
                    return (
                    <SwiperSlide className='testimonial'>
                        <div className='client__avatar'>
                            <img src={avatar}/>
                        </div>
                        <h3 className='client__name'>{name}</h3>
                        <h5 className='client__job'>{job}</h5>
                                    <small className='client__review'>{review}</small>
                                    <small className='client__review'>{review2}</small>
                    </SwiperSlide>
                    )

                    })

               
               }

               
            </Swiper>
        </section>

    )
}

export default Testimonials