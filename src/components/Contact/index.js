import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };


    function handleSubmit(e) {
        e.preventDefault();
        
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value});
            console.log('Form', formState);
        }
    };


    return(
        <form id="contact-form" onSubmit={handleSubmit} >
            <h2 className="contact">Contact Me:</h2>
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" name="Name" className="form-control" id="inputName" defaultValue={name} onBlur={handleChange} />
            </div>
            <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" name="Email" className="form-control" id="inputEmail" defaultValue={email} onBlur={handleChange} />
            </div>
            <div className="form-group">
                <label for="textarea">Message</label>
                <textarea className="form-control" name="Message" id="textarea" rows="3" defaultValue={message} onBlur={handleChange} ></textarea>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    );
}

export default Contact;
