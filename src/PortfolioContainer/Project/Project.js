import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import './Project.css'
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const Project = ({project}) => {
  const {id , img , text, name} = project
  return (
    
         
       <div className="project mt-5">
         <Fade  right cascade>
        <div className="card mb-3 p-3 doc">
             <div className="row g-0">
                <div className="col-md-4">
                <img src={img} height="200px" width="350px" className="img-fluid h-75 rounded-start"  alt="..."/>
                </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><small className="text-muted">{text}</small></p>
                    <Link to={`/${id}`} > <Button variant="outline-info mt-4 p-0">Show More</Button></Link>
                </div>
            </div>

    
         </div>
    </div>
    </Fade>
    </div>
   
  );
};

export default Project;
