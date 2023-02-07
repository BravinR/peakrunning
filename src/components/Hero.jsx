import React from "react"
import hero from '../assets/heroImage.JPG';
import hero2 from '../assets/heroImage2.JPG';
import hero3 from '../assets/heroImage3.JPG';
import hero4 from '../assets/heroImage4.jpg';
import hero5 from '../assets/heroImage5.JPG';
import hero6 from '../assets/heroImage6.JPG';
import hero7 from '../assets/heroimage7.JPG';

function Hero() {
  return (
    <div className="">
        <div>
            <img className="rounded-lg w-auto mt-4" src={hero4} alt="" />
        </div>
        <div className="hidden">
            <img className="rounded-lg w-80 h-auto mt-4" src={hero} alt="" />
            <img className="rounded-lg w-80 h-auto mt-4" src={hero2} alt="" />
        </div>
        <div className="hidden">
            <img className="rounded-lg w-80 h-auto mt-4" src={hero3} alt="" />
            <img className="rounded-lg w-80 h-auto mt-4" src={hero7} alt="" />
        </div>
        <div className="hidden">
            <img className="rounded-lg h-96 w-auto mt-4" src={hero6} alt="" />
        </div>
         
    </div>
  )
};

export default Hero;
