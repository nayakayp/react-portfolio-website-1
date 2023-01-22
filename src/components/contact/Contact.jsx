import React from 'react'
import './contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {FaWhatsapp} from "react-icons/fa"

// Install Contact from EmailJS
import {useRef} from 'react'
import emailjs from 'emailjs-com';




const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_drrz15e', 'template_zu0ay8h', form.current, 'hdsUPnw3CQMVJQPUL')

        e.target.reset()
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
      };


    return (
        <section id="contact">
            <h5>Let's we discuss your needs</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>me@achmad-rozie.com</h5>
                        <a href="mailto:me@achmad-rozie.com" target='_blank'>Send a message</a>
                    </article>
                    {/* <article className='contact__option'>
                        <mdOutlineEmail/>
                        <h4>Email</h4>
                        <h5>me@achmad-rozie.com</h5>
                        <a href="mailto:me@achmad-rozie.com" target='_blank'>Send a message</a>
                    </article> */}
                    
                    <article className='contact__option'>
                        <FaWhatsapp className='contact__option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>(+62) 859 1067 40134</h5>
                        <a href="https://wa.me/62859106740134?text=Hello%20Rozie,%20I%20would%20like%20to%20discuss%20related%20to%20my%20project,%20can%20we%20set%20a%20discussion?
" target='_blank'>Send a message</a>
                    </article>
                </div>
                
                {/* END OF CONTACT OPTIONS */}

                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name ='name' placeholder='Your Full Name' required/>
                        <input type="email" name ='email' placeholder='Your Email Name' required/>
                        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                        <button type='submit' className='btn btn-primary'> Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact