import React from "react";
import emailIcon from "../../images/contact/icon-email.svg";
import locationIcon from "../../images/contact/icon-location.svg";
import phoneIcon from "../../images/contact/icon-phone.svg";
import facebook from "../../images/social-media/facebook.svg";
import github from "../../images/social-media/github.svg";
import linkedin from "../../images/social-media/linkedin.svg";

const Contacts = () => {
   return (
      <>
         <section id="contacts" className="footer-content">
            <div className="contact-content">
               <form id="contact-form">
                  <h2>Lets Talk</h2>
                  <div className="field-container">
                     <label htmlFor="first-name">Name</label>
                     <input type="text" name="name" id="name" className="form-field" placeholder="Huwan Delakrus" minLength="5" maxLength="32" required />
                     <div className="warning">Must not be empty & minimum of 5 characters.</div>
                  </div>

                  <div className="field-container">
                     <label htmlFor="email">Email</label>
                     <input type="email" name="email" id="email" className="form-field" placeholder="huwan@example.com" maxLength="32" required />
                     <div className="warning">Email is invalid. Must not be empty.</div>
                  </div>

                  <div className="field-container">
                     <label htmlFor="subject">Subject</label>
                     <input type="text" name="subject" id="subject" className="form-field" placeholder="Job Offer" minLength="5" maxLength="32" required />
                     <div className="warning">Must not be empty & minimum of 5 characters.</div>
                  </div>

                  <div className="field-container">
                     <label htmlFor="message">Message</label>
                     <textarea
                        name="message"
                        id="message"
                        className="form-field"
                        cols="4"
                        rows="10"
                        placeholder="Please contact me in the above email address."
                        minLength="5"
                        maxLength="200"
                        required
                     ></textarea>
                     <div className="warning">Must not be empty & minimum of 5 characters.</div>
                  </div>

                  <input type="submit" value="Send" id="send-btn" className="send-btn" />
               </form>

               <div className="contact-social-container">
                  <div className="address-container">
                     <h2 className="contact-text">Contacts</h2>

                     <div className="address-text">Address</div>
                     <div className="location">
                        <img src={locationIcon} alt="Location Icon" />
                        <div className="address">Nampicuan, Nueva Ecija</div>
                     </div>

                     <div className="phone">
                        <img src={phoneIcon} alt="Phone Icon" />
                        <div className="phone-number">0949 920 0932</div>
                     </div>

                     <div className="email">
                        <img src={emailIcon} alt="Email Icon" />

                        <div className="email-add">
                           <a href="mailto:melvin.enmocino@gmail.com"> melvin.enmocino@gmail.com </a>
                        </div>
                     </div>
                  </div>

                  <div className="social-media">
                     <h2 className="social-media-text">Social Media</h2>
                     <div className="social-media-icon">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener">
                           <img src={linkedin} className="linkedin" alt="Linkedin Logo" />
                        </a>

                        <a href="https://github.com/boymelvs" target="_blank" rel="noreferrer noopener">
                           <img src={github} alt="Github Logo" />
                        </a>

                        <a href="https://www.facebook.com/0000z0zz/" target="_blank" rel="noreferrer noopener">
                           <img src={facebook} alt="Facebook Logo" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Contacts;
