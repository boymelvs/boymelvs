import React, { useRef } from "react";

const Experience = () => {
   const expSection = useRef("");

   return (
      <>
         <section id="experience" ref={expSection}>
            <h2>WORK EXPERIENCE</h2>
            <div className="work-experience-content">
               <div className="job">
                  <span> Access Control System Administrator </span>
               </div>

               <ul className="companies">
                  <li className="last_company">
                     <p>Jan 2016 - Jan 2022</p>
                     <p>Gulf Business Machine (GBM)</p>
                     <p>Kingdom of Bahrain</p>

                     <div className="project">Project Involvement</div>

                     <ul className="jobsite">
                        <li>Bahrain Petroleum Company - Access Control System Project and Maintenance, Kingdom of Bahrain</li>
                     </ul>

                     <p className="duties">Duties and Resposibility</p>

                     <ul className="responsiblity">
                        <li>Resposible for monitoring, maintaining the stability and reliability of Access Control System.</li>

                        <li>Access control installations, terminations, supervision, troubleshooting, programming and configuration, testing and commissioning.</li>
                     </ul>
                  </li>
               </ul>

               <div className="job">
                  <span> Project Engineer </span>
               </div>

               <ul className="companies">
                  <li className="other_company">
                     <p>March 2009 - June 2015</p>
                     <p>Abdulla Fouad Holding Company</p>
                     <p>Dammam Saudi Arabia</p>

                     <div className="project">Project Involvement</div>

                     <ul className="jobsite">
                        <li>Bahrain Petroleum Company - Access Control system upgrading and Maintenance Project, Kingdom of Bahrain</li>

                        <li>Al-Khafji Joint Operations - CCTV Upgrade Project and Maintenance, Kingdom of Saudi Arabia</li>
                     </ul>

                     <p className="duties">Duties and Resposibility</p>

                     <ul className="responsiblity">
                        <li>Upgrade the existing access control system.</li>
                        <li>After upgrading, monitoring the stability of the system and attending minor trouble.</li>
                        <li>
                           Resposible for all Access control/CCTV system installations, terminations, supervision, troubleshooting, programming and configuration, testing and
                           commissioning.
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
         </section>
      </>
   );
};

export default Experience;
