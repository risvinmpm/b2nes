"use client";
import React from "react";
import "./advantage.css";
import FlipCard from "./FlipCard";
import ReactLenis from "@studio-freight/react-lenis";
import Copy from "../common/Copy";

const Advantage = () => {
  const flipCardsData = [
    {
      frontTitle: "Regulatory Compliance",
      backText:
        "Dubai’s Virtual Asset Regulatory Authority (VARA) ensures safety and transparency. B2NES adheres to these standards, so you can trade with confidence.",
      icon: "card1",
    },
    {
      frontTitle: "Tax Benefits",
      backText:
        "Operating in Dubai’s free zones means no corporate tax and easy profit transfers, helping you maximize your earnings.",
      icon: "card2",
    },
    {
      frontTitle: "Enhanced Security",
      backText:
        "Unlicensed platforms carry risks. B2NES uses MFA, encryption, and constant monitoring to keep your assets secure.",
      icon: "card3",
    },
    {
      frontTitle: "Market Access",
      backText:
        "Dubai is a global crypto hub. B2NES connects you to this vibrant market, opening doors to new opportunities.",
      icon: "card4",
    },
    {
      frontTitle: "Credibility",
      backText:
        "Our AML and KYC compliance enhances your reputation, making you a trusted player in the market.",
      icon: "card5",
    },
  ];

  return (
    <>
      <ReactLenis root>
        <div id="how-it-works" className="overflow-x-hidden">
          <div className="advantages">
            <div className="container">
              <div className="advantage-contents">
                <Copy>
                  <h2>
                    Trade Smarter with a Licensed Platform <br /> – The B2NES
                    Advantage
                  </h2>
                </Copy>
                <Copy>
                  <p>
                    Dubai’s crypto market offers immense potential, but choosing
                    the right platform is key to success. Here’s why a licensed
                    platform like B2NES gives you the edge.
                  </p>
                </Copy>
              </div>
              <div className="advantage-card-grid grid lg:grid-cols-3">
                {flipCardsData.map((card, index) => (
                  <div key={index} className="grid-item">
                    <FlipCard {...card} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default Advantage;
