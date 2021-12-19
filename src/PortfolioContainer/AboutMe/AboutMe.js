import React from 'react';
import { Card, CardGroup , ProgressBar } from 'react-bootstrap';
import './About.css'
import education from '../../assets/AboutME/education.png'
import programming from '../../assets/AboutME/programming.png'
import Fade   from 'react-reveal';


const AboutMe = () => {

  const now = 75;
  const now2 = 80;
  const now3 = 85;
  const now4 = 85;
  const now5 = 90;
  const now6 = 90;

  return (
    <div className="about-container mt-5 " id="aboutMe">
      <div className="aj">
      <h1 className="text-center about">About Me</h1>
     
     <ProgressBar  className="rounded">
           <ProgressBar animated  variant="info" now={35} key={1} />
           <ProgressBar animated variant="warning" now={30} key={2} />
           <ProgressBar animated variant="danger" now={35} key={3} />
       </ProgressBar>
     <CardGroup className="mt-5">
     
       <Card className="text-center m-3 border-0">
       <Fade  left cascade>
         <Card.Img variant="top" className="w-25 mx-auto" src={education} />
         <Card.Body className="text-left">
           <h4 className="fw-bold about-title">Education</h4>
           <hr className="separator" />
           
           <Card.Text>
           
             <h5>SSC  2016(Commerce)</h5>
             <p>Multilateral High School, Sirajganj </p>
             <h5>HSC  2018(Commerce)</h5>
             <p>Sirajganj Government College, Sirajganj </p>
             <h5>BBA  2018-19 sessoin (Accounting Department)</h5>
             <p>National University, Gazipur , Bangladesh </p>
             <br />
             <h5>Programming</h5>
             <p>Programming Hero , Youtube , Google</p>
             
           </Card.Text>
           
         </Card.Body>

         </Fade >
       </Card>
       
       
       <Card className="text-center m-3 border-0">
       <Fade  right cascade>
         <Card.Img variant="top" className="w-25 mx-auto" src={programming} />
         <Card.Body className="text-left">
         <h4 className="fw-bold about-title">Programming Skills</h4>
         <hr className="separator" />
           <Card.Text>
             <h5>HTML</h5>
             <ProgressBar className="bar" animated variant="danger" now={90} label={`${now5}%`} />
             <h5>JavaScript</h5>
             <ProgressBar className="bar" animated variant="warning" now={85} label={`${now3}%`} />
             <h5>CSS</h5>
             <ProgressBar className="bar" animated variant="primary" now={90} label={`${now6}%`} />
             <h5>React</h5>
             <ProgressBar className="bar" animated variant="secondary" now={85} label={`${now4}%`} />
             <h5>Node Js</h5>
             <ProgressBar className="bar" animated variant="info" now={75} label={`${now}%`} />
             <h5>MongoBD</h5>
             <ProgressBar className="bar" animated variant="success" now={80} label={`${now2}%`} />
             <h5>Firebase Authentication</h5>
             <ProgressBar className="bar" animated variant="warning" now={90} label={`${now5}%`} />
           </Card.Text>
         </Card.Body>
         </Fade >
       </Card>
     
     </CardGroup>
      </div>
   
    </div>
  );
};

export default AboutMe;