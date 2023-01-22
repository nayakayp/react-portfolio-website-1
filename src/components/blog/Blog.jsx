import React from 'react'
import './blog.css'
import IMG1 from '../../assets/ds_trend.png' 
import IMG2 from '../../assets/underated_skill.png' 
import IMG3 from '../../assets/end_era_of_stack_overflow.png' 

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const data = [
    {
        id: 1,
        image: IMG1, 
        title: '2023, End Era of Data Analyst?',
        description: "Disclaimer, ini adalah opini dan hasil dari riset pribadi. Namun, berdasarkan pengalaman di 2018 dari hasil riset kecil-kecilan yang entah kenapa waktu itu gw yakin banget data role bakal booming di 2022–2023",
        read_more: 'https://medium.com/@achmad.rozie/goodbye-data-analyst-f532e7631f05',
        // explanation: 'XX'
    },
    {
        id: 2,
        image: IMG2, 
        title: '1 Underrated Skill Required as a Data Analyst!',
        description: "Berawal dari tanggal 16 desember kemarin, dari niat silaturahmi karna sama senior jaman di kampus karna kebetulan ketemu di salah satu group WA, akhirnya dikasih kesempatan buat sharing sama temen-temen yang baru lulus bootcamp.",
        read_more: 'https://medium.com/@achmad.rozie/the-most-underrated-skill-required-as-a-data-analyst-or-even-all-roles-cc4585082842',
        // explanation: 'https://medium.com/@achmad.rozie/driver-supply-distribution-forecasting-for-higher-fulfillment-rate-using-machine-learning-694560893407'
    },
    {
        id: 3,
        image: IMG3, 
        title: 'OpenAI hadir, akhir dari kejayaan Stack Overflow?',
        description: "Berdasar data dari stackoverflow.co, jumlah kunjungan customer ke situs mereka diangka lebih dari 100 juta / bulan. Namun, kondisi diatas tidak akan bertahan lama.",
        read_more: 'https://medium.com/@achmad.rozie/openai-hadir-akhir-dari-kejayaan-stack-overflow-1e46b774ec12',
        // explanation: 'https://medium.com/@achmad.rozie/ml-create-customer-churn-prediction-using-3-method-comparison-support-vector-machine-naive-c44d6a6f871a'
    }
]

const Blog = () => {
    return (
        <section id="blog">
            <h5>My Recent Post</h5>
            <h2>Blog</h2>

        {/* <Swiper className='container blog__container'
                    // spaceBetween={30}
                    // slidesPerView={2}
                    // // pagination={{dynamicBullets: true,}}
                    // modules={[Pagination]}
                    // pagination={{
                    //     clickable: true,
                    //   }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    // navigation={true}
                    modules={[Pagination, Navigation]}
                    // className="mySwiper"
        > */}

        <div className='container blog__container'>

            {
                data.map(({id,image, title, description, read_more}) => {
                    return (
                    <article key={id} className='blog__item'>
                    <div className='blog__item-image'>
                        <img src={image} alt=""/>
                    </div>
                    <div className='blog__content'>
                        <h3>{title}</h3>
                        <small>{description}</small>
                    </div>           
                    <div className='cta'>
                        <a href={read_more} className='btn btn-primary' target='_blank'>Read More</a>
                        {/* <a href={explanation} className='btn btn-primary' target='_blank'>Detail / Demo</a> */}
                    </div>


                </article>
                    )
                }

                )
            }
        </div>
        </section>
        
    )
}

export default Blog