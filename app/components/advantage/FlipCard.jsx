import React from "react";
import "./advantage.css";
import GlassIcons from "../animations/glass-icons/GlassIcons";
import Image from "next/image";
import card1img from "../../asset/card1.png";
import card2img from "../../asset/card2.png";
import card3img from "../../asset/card3.png";
import card4img from "../../asset/card4.png";
import card5img from "../../asset/card5.png";
import shadeimg from "../../asset/iconc.png";
import shadebottom from "../../asset/iconc2.png";

const images = {
  card1: card1img,
  card2: card2img,
  card3: card3img,
  card4: card4img,
  card5: card5img,
};

const FlipCard = ({ frontTitle, backText, icon }) => {
  const imageSrc = images[icon] || card1img; // Fallback to card1img if icon not found

  return (
    <div>
      {/* <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Image
              src={imageSrc}
              alt={frontTitle}
              width={100} // Set appropriate dimensions
              className="card-image"
            />
            <h2>{frontTitle}</h2>
          </div>
          <div className="flip-card-back">
            <p>{backText}</p>
          </div>
        </div>
      </div> */}
      <div className="flip-card" tabIndex="0">
        <div className="shade-img">
          <Image src={shadeimg} alt="shade" />
        </div>
        <div className="shade-img-bottom">
          <Image src={shadebottom} alt="shade" />
        </div>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Image
              src={imageSrc}
              alt={frontTitle}
              width={90} // Set appropriate dimensions
              className="card-image"
            />
            <h2>{frontTitle}</h2>
          </div>
          <div className="flip-card-back">
            <p>{backText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
