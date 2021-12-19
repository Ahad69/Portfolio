import React from 'react';
import './ContractMe.css'
import Typical from "react-typical";
import emailjs from 'emailjs-com';
import Slide  from 'react-reveal';
import { ProgressBar } from 'react-bootstrap';

const ContractMe = () => {

        
  
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_b0v3uci', 'template_e4l70r7', e.target , 'user_EbkOifnUUAlNtC6ZGqhWL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        
        <div id="contract">
           
            <div className="form-container" >
                <div>
            <h1 className="text-center about">Contract Me</h1>
            <ProgressBar  className="rounded">
            <ProgressBar animated  variant="info" now={35} key={1} />
            <ProgressBar animated variant="warning" now={30} key={2} />
            <ProgressBar animated variant="danger" now={35} key={3} />
           </ProgressBar>
                </div>
            <Slide bottom>
            <form onSubmit={sendEmail}>
            <h1>
            <Typical
                  steps={[
                      
                      " Now Get in touch", 2000,
                      
                    ]}
                  loop={Infinity}
                  wrapper="p"
                 
                />
            </h1>
                
                
                <input type="text" id='name' placeholder="Your Name" name="name" />
                <input type="email" id='email' placeholder="Your Email" name="email" />
                
                <textarea type="textarea" rows={4} id='message'  placeholder="Message" name="message"></textarea>
                <button type="submit" value="Send">Send</button>
            </form>
            </Slide>
           
        </div>

        </div>
    );
};

export default ContractMe;