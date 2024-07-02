import React from "react";
import * as Icon from "react-feather";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area ptb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>Mail Here</h3>
                <p>
                  <a href="mailto:info@cerbotech.in">info@cerbotech.in</a>
                </p>
               
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.MapPin />
                </div>
                <h3>Visit Here</h3>
                <p>
                Office No 1 , Lower Basement Shreepal Complex ,Mahatma Gandhi Rd ,Ghatkopar West , Mumbai - 400086.
                </p>
                <p>
                S/202 , Shiv Sharnam Complex ,Indira Gandhi Statue , 100 Feet Rd Anand , Gujarat 388001
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Phone />
                </div>
                <h3>Call Here</h3>
                <p>
                  <a href="tel:+919081846089">+91 9081846089</a>
                </p>
                <p>
                  <a href="tel:+917977578721">+91 7977578721</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
