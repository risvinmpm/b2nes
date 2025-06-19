"use client";
import React, { useEffect, useRef } from "react";
import chooseimg from "../../asset/chooseimg.png";
import Image from "next/image";
import Lottie from "lottie-react";
import whychooseAnimation from "../../../app/components/animations/whychoose.json";
import "./choose.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import Copy from "../common/Copy";

const WhyChoose = () => {
  const animatedTextRef = useRef(null);

  return (
    <>
      <ReactLenis root>
        <div className="why-choose">
          <div className="noise-animation">
            {/* <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        /> */}
          </div>

          <div className="right-choose">
            <Image src={chooseimg} alt="Choose B2NES" />
          </div>

          <div className="container relative">
            <div className="content-why-choose">
              <div className="left-why">
                <Copy>
                  <div className="h2-wrapper relative inline-block">
                    <h2>why choose B2NES</h2>
                  </div>

                  <p>
                    B2NES is a licensed crypto brokerage platform designed for
                    experienced traders ready to take their skills to the next
                    level. We’re looking for individuals with a strong track
                    record in crypto trading. Pass our initial assessment, and
                    we’ll provide the capital to help you trade and grow. With
                    advanced technology and a commitment to shared success,
                    B2NES ensures you have the tools and support to thrive in
                    the crypto market.
                  </p>
                </Copy>
              </div>

              <div className="right-why relative">
                <div className="lottie-wrapper">
                  <Lottie animationData={whychooseAnimation} loop={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default WhyChoose;
