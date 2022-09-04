import React, { useState, useRef, useEffect } from "react";
import Modal from "./Modal";
import emailIcon from "../../images/contact/icon-email.svg";
import locationIcon from "../../images/contact/icon-location.svg";
import phoneIcon from "../../images/contact/icon-phone.svg";
import facebook from "../../images/social-media/facebook.svg";
import github from "../../images/social-media/github.svg";
import linkedin from "../../images/social-media/linkedin.svg";
import FormValidation from "../component/FormValidation";

const Contacts = ({ getContacts }) => {
   const getForm = useRef();
   const contactLocation = useRef();
   const [contactForm, setContactForm] = useState();
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");
   const [showModal, setShowModal] = useState(false);
   const getUrl = "https://formspree.io/f/xaykywrp";
   // const getUrl = "https://getform.io/f/09fc1c84-417f-4318-9853-4c0d232a6e51";
   const method = "post";

   useEffect(() => {
      setContactForm(getForm);
      getContacts(contactLocation.current);
   }, [getContacts]);

   const onInputChange = (e) => {
      let getId = e.target.id;
      let value = e.target.value;

      getId === "name" && setName(value);
      getId === "email" && setEmail(value);
      getId === "phone" && setPhone(value);
      getId === "subject" && setSubject(value);
      getId === "message" && setMessage(value);

      if (value) {
         FormValidation(contactForm.current, getId);
      }
   };

   const onFormSubmit = async (e) => {
      e.preventDefault();
      let getId = e.target.id;

      if (FormValidation(contactForm.current, getId)) {
         let data = new FormData(contactForm.current);

         try {
            const res = await fetch(getUrl, { method: method, body: data, headers: { Accept: "application/json" } });

            if (res.ok) {
               setShowModal(true);
            }
         } catch (error) {
            console.log(error);
         }
      }
   };

   const resetForm = () => {
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
   };

   return (
      <>
         <section id="contacts" className="footer-content" ref={contactLocation}>
            <div className="contact-content">
               <form id="contact-form" ref={getForm} onSubmit={onFormSubmit}>
                  <h2>Lets Talk</h2>
                  <div className="field-container">
                     <label htmlFor="name">Name*</label>
                     <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-field"
                        placeholder="Huwan Delakrus"
                        minLength="5"
                        maxLength="31"
                        value={name}
                        onChange={onInputChange}
                        required
                     />
                     <div className="warning">Must not be empty & minimum of 5 characters.</div>
                  </div>

                  <div className="email-phone-container">
                     <div className="field-container">
                        <label htmlFor="email">Email*</label>
                        <input
                           type="email"
                           name="email"
                           id="email"
                           className="form-field"
                           placeholder="huwan@example.com"
                           maxLength="31"
                           value={email}
                           onChange={onInputChange}
                           required
                        />
                        <div className="warning">Email is invalid. Must not be empty.</div>
                     </div>

                     <div className="field-container">
                        <label htmlFor="phone">Phone*</label>
                        <input
                           type="text"
                           name="phone"
                           id="phone"
                           className="form-field"
                           placeholder="0949 1234567"
                           minLength="9"
                           maxLength="26"
                           value={phone}
                           onChange={onInputChange}
                           required
                        />
                        <div className="warning">Its look like not a phone number. Must not be empty.</div>
                     </div>
                  </div>

                  <div className="field-container">
                     <label htmlFor="subject">Subject*</label>
                     <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="form-field"
                        placeholder="Job Offer"
                        minLength="5"
                        maxLength="31"
                        value={subject}
                        onChange={onInputChange}
                        required
                     />
                     <div className="warning">Must not be empty & minimum of 5 characters.</div>
                  </div>

                  <div className="field-container">
                     <label htmlFor="message">Message*</label>
                     <textarea
                        name="message"
                        id="message"
                        className="form-field"
                        cols="4"
                        rows="10"
                        placeholder="Please contact me in the above email address."
                        minLength="5"
                        maxLength="251"
                        value={message}
                        onChange={onInputChange}
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
                        <div className="phone-number">0949_9200932</div>
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
         {showModal && <Modal showModal={showModal} setShowModal={setShowModal} resetForm={resetForm} />}
      </>
   );
};

export default Contacts;
