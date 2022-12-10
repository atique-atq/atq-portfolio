import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;
        const message = form.message.value;
        
    }

    return (
        <div className='my-24 px-[8%]' id="skills">
            <h1 className='font-serif text-5xl font-bold mb-5'>Contact me</h1>
            <div className="card flex-shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100 py-6">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <input type="text" name='name' placeholder="your name" className="input input-bordered rounded-none" required />
                    </div>

                    <div className="form-control">
                        <input type="email" name='email' placeholder="your email" className="input input-bordered rounded-none" required />
                    </div>

                    <div className="form-control">
                        <input type="text" name='address' placeholder="Your Address/Phone Number" className="input input-bordered rounded-none" />
                    </div>

                    <div className="form-control">
                        <input type="text" name='message' placeholder="write message" className="input input-bordered rounded-none" />
                    </div>

                    <div className="form-control py-0 my-0">
                        <input className="btn btn-info hover:bg-success rounded-none" type="submit" value="Submit" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Contact;