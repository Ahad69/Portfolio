import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Bounce, Fade, LightSpeed } from 'react-reveal';

import { Link, useParams } from 'react-router-dom';
import { ScaleLoader
} from 'react-spinners';
import './Details.css'



const Details = () => {
  
  const {id} = useParams()
  const [projectDetails, setProjectDetails] = useState([])
  
  const [loading , setLoading] = useState(false)
      useEffect(()=>{
          setLoading(true)
          setTimeout(()=>{
              setLoading(false)
          },1000)
      },[])

  useEffect(()=>{
      fetch('./database.json')
      .then(res => res.json())
      .then(data =>{
          console.log(data)
          setProjectDetails(data)
      });
  },[])
  
  const projectDetail = projectDetails.find(fd => fd.id == id )
  console.log(projectDetail)

  

  
  return (
      <div className="div">
        
        { loading? 
        <ScaleLoader


        
        className="clip m-5 p-5 text-bold"
        id="clip"
        size={100}
        color={"#c0392b"}
        loading={loading}
        />
        : 
        <div className="details">
        <div className="container">
        <CardGroup className="g-4">
         
         <Card className="proimg-card">
         <Fade  left>
           <Card.Img variant="top" className="proimg" src={projectDetail?.proimg} />
           </Fade>
         </Card>
         <Card className="proimg-card" >
         <Fade  bottom>
           <Card.Img variant="top" className="proimg" src={projectDetail?.proimg3} />
           </Fade>
         </Card>
         <Card className="proimg-card">
         <Fade  right>
           <Card.Img variant="top" className="proimg" src={projectDetail?.proimg2} />
           </Fade>
         </Card>
       </CardGroup>
       <div>
         <h1 className="project-title text-center mt-5">
         <Bounce bottom cascade>
           {projectDetail?.name}
           </Bounce>
           </h1>
         <br />
         <br />
         <br />
         <h2 className="fw-bold">
         <Bounce right cascade>
           About this Project
           </Bounce>
           </h2> 
         <hr /> 
         <h6 className="text">
         
           {projectDetail?.text}
          
           </h6>
         <br />
         <br />
         <h2 className="fw-bold"><Bounce right cascade>Used technology</Bounce></h2> 
         <hr /> 
         <h6 className="text">{projectDetail?.tecnology}</h6>
          <br />
          <br />
          <h2 className="fw-bold"><Bounce right cascade>Important Links</Bounce></h2> 
          <div className="links">
          <Button variant="outline-danger"><a target="_blank" href={projectDetail?.liveLink}>Live Site</a></Button>
          <Button variant="outline-warning"><a target="_blank" href={projectDetail?.clientLink}>Client Site</a></Button>
          <Button variant="outline-success"><a target="_blank" href={projectDetail?.serverLink}>Server Site</a></Button>
          
        
          </div>
       </div>
       <button className="btn primary-btn m-5  "><Link className="text-white fw-bold fs-3" to="/home">Back To Home</Link></button>
       </div>
    </div>
       
}
    
      </div>
    );
};

export default Details;