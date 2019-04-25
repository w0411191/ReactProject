import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.0273009492!2d-63.58235658424292!3d44.63735897909993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a2239f902bbc5%3A0xebc3a0ba92de29e8!2s5800+South+St%2C+Halifax%2C+NS+B3H+3A2!5e0!3m2!1sen!2sca!4v1556159979036!5m2!1sen!2sca" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;