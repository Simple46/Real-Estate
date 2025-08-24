import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="padding innerwidth flexCenter f-container">
                {/* left side  */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" width={150} />
                    <span className="secondaryText"> Our mission is to make all people <br/> the best place to live for them</span>
                </div>

                {/* right side  */}
                <div className="flexColStart f-right">
                    <span className="primaryText"> Information</span>
                    <span className="secondaryText"> 123 Badagary Road Lagos</span>

                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span> Services</span>
                        <span>Products</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer