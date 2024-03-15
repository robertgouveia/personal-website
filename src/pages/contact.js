import Navbar from "../components/navbar";
import React from "react";
import Form from './../components/form';
import './../modules/contact.modules.css';

const ContactPage = () => {
    return(
        <div className='page'>
            <Navbar/>
            <div className='contact-hero'>
                <h1>Contact Me</h1>
                <h4>We Encourage Communication via this Form</h4>
                <p>We kindly request that you utilize this form exclusively for inquiries related to hiring or
                    collaboration opportunities. Our email is designated for these purposes alone and is not intended
                    for general messages.</p>
            </div>
            <Form />
            <p className='contact-footer' hidden>Thank you for reaching out! Rest assured that upon receiving your message, I'll make it a priority to respond promptly within 48 hours. Kindly keep an eye on your inbox for my email, as I'll be reaching out using the address you've provided in the form. I'm eagerly looking forward to connecting with you!</p>
        </div>
    )
}

export default ContactPage;