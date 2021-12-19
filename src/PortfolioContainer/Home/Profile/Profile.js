import Typical from "react-typical";
import React from "react";
import './Profile.css'


export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">
                <a href="https://www.facebook.com/profile.php?id=100026601137213">
                <i className="fa fa-facebook-square"></i>
                </a>
                <a href="www.google.com">
                <i className="fa fa-google-plus-square"></i>
                </a>
                <a href="https://join.skype.com/invite/wmUTlD4WXTgH">
                <i className="fa fa-skype"></i>
                </a>
                <a href="https://www.linkedin.com/in/ahad-hossain-b37492216/">
                <i className="fa fa-linkedin-square"></i>
                </a>
              </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello I'M <span className="highlighted-text">Ahad Hossain</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  steps={[
                      "Full Stack Developer 💻 ", 2000,
                      "MERN Developer 🔥" , 2000,
                      "React Developer ⚛️", 2000,
                    ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h1>
              <h5>Knack of building applications with front and back end operations.</h5>
            </span>
          </div>
          <div className="profile-options">
              <a href="#contract"><button className="btn primary-btn m-5">HIRE ME</button></a>
              <a href='Ahad.pdf' download='Ahad Ahad-resume.pdf'>
              
              <button className="btn nion m-5 text-white"> 
              <span></span>
              <span></span>
              <span></span>
              <span></span>GET RESUME</button>
              </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">
                
            </div>
            
        </div>
        <div>
        
        </div>
      </div>
    </div>
  );
}
