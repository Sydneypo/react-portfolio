import React, {Component}  from 'react';
import Pdf from '../../Documents/document.PDF';


class Resume extends Component {
    
    render() {

        return (
            <div className="resume-link">
                <a href= {Pdf} target="_blank" rel="noreferrer" id="resume">
                    Click here to download resume!</a>
            </div>
        )
    }
}


export default Resume;

