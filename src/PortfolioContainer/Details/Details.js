import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';



const Details = () => {
  
    const {id} = useParams()
    const [project, setProject] = useState([])
    const [imageIndex, setImageIndex] = useState(0);
    console.log(project)
    useEffect(()=>{
      fetch('./database.json')
      .then(res=>res.json())
      .then(data => {
          setProject(data)
          console.log(data)
      })
  },[])

    const projec = project.find(fd => fd.id == id )
    console.log(projec)

    const images = [ project.proimg , project.proimg2 ,  project.proimg3]
    
    const NextArrow = ({ onClick }) => {
      return (
        <div className="arrow next" onClick={onClick}>
          <FaArrowRight />
        </div>
      );
    };
  
    const PrevArrow = ({ onClick }) => {
      return (
        <div className="arrow prev" onClick={onClick}>
          <FaArrowLeft />
        </div>
      );
    };
    const settings = {
      infinite: true,
      lazyLoad: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
    };
    
    return (
      <div>
        <div className="app2">
          <h1>{projec.name}</h1>
         <img src={projec.img} alt="" />
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div
                className={idx === imageIndex ? "slide activeSlide" : "slide"}
              >
                <img height="400px" className={img} src={img} alt={img} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
};

export default Details;