// import { css } from '@emotion/core'
import React, { useState } from 'react'
import "./Contact.css"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ContactNavbar } from './ContactNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMobileAndroid } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {

    let [fdata,setfdata]=useState({yourname:"",youremail:"",subject:"",message:""})
    

    let updateFdata=({target:{value,name}})=>{
        setfdata({...fdata,[name]:value})
    }

    let sendFormData=(e)=>{
        e.preventDefault()
    }


    return (
        <div>

            <ContactNavbar/>

            <section className='location'>
                <div className='location-detail'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3646727748874!2d77.57400437411991!3d12.948501115386247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f14b502b83%3A0x29b021be89035e21!2sJSpiders%20Basavanagudi!5e0!3m2!1sen!2sin!4v1702617227438!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>


            <section className='contact-details'>
                <div className='contact-location'>
                    <FontAwesomeIcon icon={faLocationDot} className='location-icon'/>
                    <div className='location-content'>
                        <h2>Location:</h2>
                        <p>A108 Adam Street <br />
                        New York, NY 535022
                        </p>
                        <p></p>
                    </div>
                </div>
                <div className='contact-mail'>
                    <FontAwesomeIcon icon={faEnvelope} className='mail-icon'/>
                    <div className='mail-content'>
                    <h2>Email:</h2>
                    <p>
                        info@example.com <br />
                        contact@example.com
                    </p>
                    </div>
                </div>
                <div className='contact-phone'>
                    <FontAwesomeIcon icon={faMobileAndroid} className='phone-icon'/>
                    <div className='phone-content'>
                    <h2>Call:</h2>
                    <p>
                        +1 5589 55488 51 <br />
                        +1 5589 22475 14
                    </p>
                    </div>
                </div>
            </section>



            <form onSubmit={sendFormData} className='form-details'>

                <input name='yourname' onChange={updateFdata} type="text" placeholder='Your Name' className='form-name' />
                <input name='youremail' onChange={updateFdata} type="email" placeholder='Your E-mail' className='form-email'/>
                {/* <hr /> */}
                <input name='subject' onChange={updateFdata} type="text" placeholder='Subject' className='form-subject'/>
                {/* <hr /> */}
                <textarea name='message' onChange={updateFdata} cols="" rows="" placeholder='Message' className='form-message'></textarea>
                <input type="submit" value="Send Message" className='form-btn'/>

            </form>        
        </div>
    )
}