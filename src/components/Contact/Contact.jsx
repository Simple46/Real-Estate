import React from "react";
import './Contact.css'

const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side */}
                <div className="c-left">
                 left
                </div>
 
                {/* right side  */}
                <div className="c-right">
                    <div className="img-container">
                        <img src="./contact.jpg" alt=""/>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

