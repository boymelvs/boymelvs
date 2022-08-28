import React, { useEffect, useState } from "react";

const Modal = ({ showModal, setShowModal, resetForm }) => {
   const [stopScroll, setStopScroll] = useState();

   useEffect(() => {
      const getBody = document.querySelector("body");
      setStopScroll(getBody);

      getBody.classList.add("active");
   }, []);

   const closeModal = () => {
      setShowModal(false);
      stopScroll.classList.remove("active");
      resetForm();
   };

   return (
      <>
         <div id="thanks-modal" className={showModal ? "active show" : ""}>
            <div className="thanks-message">
               <div className="close-modal" onClick={closeModal}>
                  x
               </div>

               <h2 className="thank-you-title">Thank you!</h2>
               <p className="message">Your message successfully sent!</p>
            </div>
         </div>
      </>
   );
};

export default Modal;
