import React from 'react';

function Contact() {

    return(
        <form>
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
        </form>
    );
}

export default Contact;
