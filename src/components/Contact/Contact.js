import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';


const SERVICE_ID = 'service_39zwied';
const TEMPLATE_ID = 'template_k92tbbg';
const PUBLIC_KEY = 'XcKD147EqdmH9fkJo';

const Contact = () => {
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                toast.success('Message Sent', {
                    position: "top-right"
                });
                console.log('-------', result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                toast.error('Service Unavailable', {
                    position: "top-right"
                });
            });

    }

    return (
        <div className='my-24 px-[8%] mt-12' id="contact">
            <h1 className='font-serif text-5xl font-bold mb-5'>Contact me</h1>

            <div className="card flex-shrink-0 w-full mx-auto max-w-lg shadow-2xl bg-base-100 py-6">
                <form ref={form} onSubmit={sendEmail}>
                    <input placeholder="your name" className="mx-20 w-7/12 py-0 my-0 bg-base-100 border-2" type="text" name="user_name" />
                    <br />
                    <br />
                    <input placeholder="your email" className="mx-20 w-7/12 py-0 my-0 bg-base-100 border-2" type="email" name="user_email" />
                    <br />
                    <br />
                    <textarea placeholder="Type Message" className="mx-20 w-7/12 py-0 my-0 bg-base-100 border-2" name="message" />
                    <br />
                    <br />
                    <input className="btn btn-info hover:bg-success rounded my-2 mx-20 w-7/12" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;