import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Project from '../Project/Project';

const Projects = () => {
    const [projects , setProjects] = useState([])
    useEffect(()=>{
        fetch('./database.json')
        .then(res=>res.json())
        .then(data => {
            setProjects(data)
            console.log(data)
        })
    },[])
    return (
        <div id="project">
            <h1 className="text-center about">Projects</h1>
            <ProgressBar  className="rounded">
            <ProgressBar animated  variant="info" now={35} key={1} />
            <ProgressBar animated variant="warning" now={30} key={2} />
            <ProgressBar animated variant="danger" now={35} key={3} />
           </ProgressBar>
            {
                projects.map(project =><Project project={project}></Project>)
            }
        </div>
    );
};

export default Projects;