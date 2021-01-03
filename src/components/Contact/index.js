import React from 'react';

function Contact() {

    return(
        <form id="contact-form">
            <h2 className="contact">Contact Me:</h2>
            <div className="form-group">
                <label for="first-name">First Name</label>
                <input type="name" className="form-control" id="inputName" placeholder="Enter First Name" />
            </div>
            <div className="form-group">
                <label for="last-name">Last Name</label>
                <input type="name" className="form-control" id="inputName" placeholder="Enter Last Name" />
            </div>
            <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Email address" />
            </div>
            <div className="form-group">
                <label for="textarea">Message</label>
                <textarea className="form-control" id="textarea" rows="3"></textarea>
            </div>
        </form>
    );
}

export default Contact;
