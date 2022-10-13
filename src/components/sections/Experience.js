import React, { useEffect, useRef } from "react";

const Experience = ({ getExp }) => {
   const expSection = useRef("");

   useEffect(() => {
      getExp(expSection.current);
   }, [getExp]);

   return (
      <>
         <section id="experience" ref={expSection}>
            <h2>WORK EXPERIENCES</h2>
            <div className="work-experience-content">
               <div className="job">
                  <span> Access Control System Administration </span>
               </div>

               <ul className="companies">
                  <li className="last_company">
                     <p>Jan 2016 - Jan 2022</p>
                     <p className="company_name">Gulf Business Machine (GBM)</p>
                     <p>Kingdom of Bahrain</p>

                     <div className="project">Project Involvement</div>

                     <ul className="jobsite">
                        <li>Bahrain Petroleum Company - Access Control System Project and Maintenance, Kingdom of Bahrain</li>
                     </ul>

                     <p className="duties">Duties and Resposibility</p>

                     <ul className="responsiblity">
                        <li>Responsible for monitoring, maintaining the stability and reliability of Access Control System.</li>

                        <li>In-charge for access control system design, installation, supervision, troubleshooting, programming and configuration, testing and commissioning.</li>
                     </ul>
                  </li>
               </ul>

               <div className="job">
                  <span> Project Engineer </span>
               </div>

               <ul className="companies">
                  <li className="other_company">
                     <p>March 2009 - June 2015</p>
                     <p className="company_name">Abdulla Fouad Holding Company</p>
                     <p>Dammam, Kingdom of Saudi Arabia</p>

                     <div className="project">Project Involvement</div>

                     <ul className="jobsite">
                        <li>Bahrain Petroleum Company - Access Control system upgrading and Maintenance Project, Kingdom of Bahrain</li>
                        <li>Al-Khafji Joint Operations - CCTV Upgrade Project and Maintenance, Kingdom of Saudi Arabia</li>
                        <li>King Abdullah University of Science and Technology (KAUST) - Access Control System Installations Project, Kingdom of Saudi Arabia</li>
                     </ul>

                     <p className="duties">Duties and Resposibility</p>

                     <ul className="responsiblity">
                        <li>Upgrade the existing access control system.</li>
                        <li>After upgrading, monitoring the stability of the system and attending minor trouble.</li>
                        <li>
                           Responsible for all Access control/CCTV system installations, terminations, supervision, troubleshooting, programming and configuration, testing and
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
