import React from "react";
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
    return (
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
          {/* left side */}
          <div className="flexColStart c-left">
            <span className="orangeText"> Our Contact</span>
            <span className="primaryText">Easy to Contact Us</span>
            <span className="secondaryText">
              {" "}
              We are always ready to help by believing a good place to live can
              make your live better{" "}
            </span>
            <div className="flexColStart contactMode">
              {/* first row  */}
              <div className="flexStart row">
                <div className="fleXColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText"> Call</span>
                      <span className="secondaryText">090 350 158 00</span>
                    </div>
                  </div>
                  <div className="flexCenter button"> Call Now</div>
                </div>
                {/* second row */}

                <div className="fleXColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText"> Chat</span>
                      <span className="secondaryText">090 350 158 00</span>
                    </div>
                  </div>
                  <div className="flexCenter button"> Chat Now</div>
                </div>
              </div>

              <div className="flexStart row">
                <div className="fleXColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Video Call</span>
                      <span className="secondaryText">090 350 158 00</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Video Call Now</div>
                </div>
                {/* second row */}

                <div className="fleXColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <HiChatBubbleBottomCenter size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText"> Message</span>
                      <span className="secondaryText">090 350 158 00</span>
                    </div>
                  </div>
                  <div className="flexCenter button"> Message Now</div>
                </div>
              </div>
            </div>
          </div>

          {/* right side  */}
          <div className="c-right">
            <div className="img-container">
              <img src="./contact.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contact

