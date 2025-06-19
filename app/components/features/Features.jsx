"use client";
import React, { useRef, useEffect, useState } from "react";
import "./features.css";
import Button from "../common/button/Button";
import ReactLenis from "@studio-freight/react-lenis";
import Copy from "../common/Copy";

const Features = () => {
  const features = [
    {
      title: "Real-Time Profit Tracking",
      subtext: "Monitor your earnings with live updates",
    },
    {
      title: "Advanced Risk Management",
      subtext: "Protect your funds with tools designed for market fluctuations",
    },
    {
      title: "Real-Time Analytics",
      subtext: "Make data-driven decisions with actionable insights",
    },
    {
      title: "Institutional Grade Security",
      subtext:
        "MFA, encryption, and 24/7 monitoring ensure your assets are safe",
    },
    {
      title: "Advanced Risk Management",
      subtext: "Protect your capital with smart tools",
    },
    {
      title: "Legally Compliant Brokerage Services",
      subtext: "Trade confidently under Dubai’s strict regulatory framework",
    },
  ];

  return (
    <>
      <ReactLenis root>
        <div id="features" className="features-section">
          <div className="key-features">
            <div className="container">
              <div className="features-parent">
                <div className="featur-animation relative">
                  <div
                    style={{
                      width: "100%",
                      height: "300px",
                      position: "relative",
                    }}
                    className="feature-animate"
                  ></div>
                  {/* text */}
                  <div className="orb-text">
                    <Copy>
                      <h2>Tools to Empower Your Trading</h2>

                      <p>
                        Focus on Trading – We Take Care of the Rest! Our
                        Platform Features
                      </p>
                    </Copy>
                  </div>
                </div>
                <div className="feature-content text-white">
                  {/* sticky scroll with ref */}
                  <div className="grid grid-cols-1 gap-6">
                    <Copy>
                      {features.map((feature, index) => (
                        <div key={index} className="border-b shadow-sm feature-gap">
                          <h3 className="text-lg md:text-2xl font-semibold">
                            {feature.title}
                          </h3>
                          <p className="text-sm font-light">
                            {feature.subtext}
                          </p>
                        </div>
                      ))}
                    </Copy>
                  </div>
                  <h1></h1>
                  <div className="sign-up-btn">
                    <Button
                      label={"Sign Up"}
                      customStyles={{
                        padding: "10px 30px",
                        border: "none",
                        boxShadow: "none",
                      }}
                      onClick={() => {
                        const section = document.getElementById("connectus");
                        if (section) {
                          section.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="mob-Features">
                  {features.map((item, index) => (
                    <div key={index} className="mob-feature-item">
                      <h4 className="mob-feature-title text-2xl font-bold text-slate-100 pb-[10px]">
                        {item.title}
                      </h4>
                      <p className="mob-feature-subtext text-kg mb-10 max-w-sm text-slate-300">
                        {item.subtext}
                      </p>
                    </div>
                  ))}
                  <div className="sign-up-btn">
                    <Button
                      label={"Sign Up "}
                      customStyles={{
                        padding: "10px 30px",
                        border: "none",
                        boxShadow: "none",
                      }}
                      onClick={() => {
                        const section = document.getElementById("connectus");
                        if (section) {
                          section.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default Features;
