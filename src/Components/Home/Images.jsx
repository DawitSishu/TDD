
import { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import  image1 from '../../assets/logo.jpg';
import  image2 from '../../assets/logo.jpg';
import  image3 from '../../assets/logo.jpg';
import  image4 from '../../assets/logo.jpg';
import  image5 from '../../assets/logo.jpg';
import  image6 from '../../assets/logo.jpg';
import  image7 from '../../assets/logo.jpg';
import  image8 from '../..assets/logo.jpg';
import  image9 from '../../assets/logo.jpg';
import { Grid, Typography } from "@mui/material";
// import './style.css';

const Gallery = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: ".grid-container",
        start: "top top",
        end: () => window.innerHeight * 4,
        scrub: true,
        pin: ".grid",
        anticipatePin: 1
      }
    })
    .set(".gridBlock:not(.centerBlock)", { autoAlpha: 0 })
    .to(".gridBlock:not(.centerBlock)", { duration: 0.1, autoAlpha: 1 }, 0.001)
    .from(".gridLayer", {
      scale: 3.3333,
      ease: "none",
    });

    const images = [image1, image7, image2,image8,image3,image6,image4,image5,image9];
    gsap.set('.gridBlock', { backgroundImage: (i) => `url(${images[i % images.length]})` });

    const bigImg = new Image();
    bigImg.addEventListener("load", function () {
      gsap.to(".centerPiece .gridBlock", { autoAlpha: 1, duration: 0.5 });
    });

    bigImg.src = image1;
  }, []);

  return(
      <div className="grid-container"  
            style={{
              // backgroundImage:`url(${backgroud})`,
              // backgroundSize:'cover',
              // backgroundPosition:'center',
              // backgroundRepeat:'no-repeat',
              backgroundColor: 'black'
            }}
      >
        <div className="grid" >
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer centerPiece">
            <div className="gridBlock centerBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
        </div>
      </div>
  )
}

export default Gallery