"use client";
import React, { useEffect, useState, useRef } from "react";
import "./success.css";
import Button from "../common/button/Button";
import Image from "next/image";
import bgblob from "../../asset/demo.svg";
import bgbolbdesk from "../../asset/Light_1 1.png";
import line from "../../asset/line.png";
import platformimg from "../../asset/platform.png";
import leftshade from "../../asset/sucleft.png";
import rightshade from "../../asset/sucright.png";
import Lottie from "lottie-react";
import successlotiesuc2 from "../animations/success2.json";
import ReactLenis from "@studio-freight/react-lenis";
import Copy from "../common/Copy";

const Success = () => {
  const cardData = [
    {
      title: "Expert Guidance",
      description:
        "Benefit from real-time advice from our experienced professionals to refine your strategies.",
    },
    {
      title: "Collaborative Community",
      description:
        "Join a vibrant community of traders and share insights, tips, and growth strategies.",
    },
    {
      title: "Innovative Tools",
      description:
        "Access state-of-the-art tools designed to enhance your trading efficiency and results.",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated team is here around the clock to assist you with any queries or technical issues.",
    },
    {
      title: "Continuous Learning",
      description:
        "Participate in workshops, webinars, and tutorials to constantly upgrade your trading knowledge.",
    },
  ];

  const content = [
    {
      title: "Expert Guidance",
      description:
        "Benefit from real-time advice from our experienced professionals to refine your strategies.",
    },
    {
      title: "Collaborative Community",
      description:
        "Join a vibrant community of traders and share insights, tips, and growth strategies.",
    },
    {
      title: "Innovative Tools",
      description:
        "Access state-of-the-art tools designed to enhance your trading efficiency and results.",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated team is here around the clock to assist you with any queries or technical issues.",
    },
    {
      title: "Continuous Learning",
      description:
        "Participate in workshops, webinars, and tutorials to constantly upgrade your trading knowledge.",
    },
    {
      title: "Legally Compliant Brokerage Services",
      description:
        "Trade confidently under Dubai's strict regulatory framework",
    },
  ];

  return (
    <>
      <ReactLenis root>
        <div className="success-page overflow-x-hidden">
          <div className="successed-screen">
            <div className="container">
              <div className="succees-content">
                <Copy>
                  <h2>Succeed Together with B2NES</h2>
                </Copy>
                <Copy>
                  <p>
                    At B2NES, we believe in the power of collaboration. Our
                    trading environment is built to help you grow
                  </p>
                </Copy>
              </div>

              <div id="features" className="features-section1 py-20">
                <div className="key-features1 flex justify-center items-center min-h-screen">
                  <div className="feature-content1 grid grid-cols-1 gap-10 max-w-xl w-full px-4">
                    {cardData.map(({ title, description }, index) => (
                      <div key={index} className="mob-success-item text-center">
                        <h4 className="mob-success-title text-2xl font-bold text-slate-100 pb-4">
                          {title}
                        </h4>
                        <p className="mob-success-subtext text-base text-slate-300 max-w-md mx-auto">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mob-success-parent">
                <div className="mob-success-items">
                  {cardData.map((item, index) => (
                    <div key={index} className="mob-success-item">
                      <Copy>
                        <h4 className="mob-success-title text-2xl font-bold text-slate-100 pb-[10px]">
                          {item.title}
                        </h4>
                      </Copy>
                      <Copy>
                        <p className="mob-success-subtext text-kg mb-10 max-w-sm text-slate-300 font-normal">
                          {item.description}
                        </p>
                      </Copy>
                    </div>
                  ))}
                </div>
              </div>

              <div className="success-bt">
                <Copy>
                  <h2>
                    Focus on Trading <br /> We Take Care of the Rest!
                  </h2>
                </Copy>
              </div>

              <div className="success-btn">
                <Button
                  label={"Become a Broker Now "}
                  customStyles={{ border: "none" }}
                  onClick={() => {
                    const section = document.getElementById("connectus");
                    section?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                />
              </div>
            </div>
          </div>

          {/* Explore Card Section */}
          <div className="explore-card">
            <div className="bg-blob">
              <Image className="bgblobmd" src={bgblob} alt="" />
              <Image className="bgdesk" src={bgbolbdesk} alt="" />
            </div>

            <div className="line-img">
              <Image src={line} alt="" />
            </div>

            <div className="parent-explore">
              <div className="left-section">
                <div className="left-contents">
                  <Copy>
                    <h2>Get Started in 4 Simple Steps</h2>
                  </Copy>
                  <Copy>
                    <p>
                      Joining B2NES is straightforward and designed to set you
                      up for success
                    </p>
                  </Copy>
                  <div className="mobexp">
                    <Button label={"Explore the Platform "} />
                  </div>
                </div>
              </div>
              <div className="right-section">
                <div className="grid grid-cols-1 gap-8">
                  {content.map(({ title, description, content }, index) => (
                    <div key={index} className="rounded-lg p-5">
                      <Copy>
                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                      </Copy>
                      <Copy>
                        <p className="text-gray-400 font-light text-sm mb-4">
                          {description}
                        </p>
                      </Copy>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Platform Section */}
          <div className="platform-sec">
            <Image className="left-shade-img" src={leftshade} alt="" />
            <Image className="right-shade-img" src={rightshade} alt="" />
            <Image className="line-shade-img" src={platformimg} alt="" />

            <div className="container">
              <div className="success-parent">
                <div className="left-success">
                  <Copy>
                    <h2 className="plat-head">
                      A Platform Built on Shared Success
                    </h2>
                  </Copy>
                  <Copy>
                    <p className="plat-para">
                      B2NES is a licensed crypto brokerage focused on empowering
                      experienced traders. We’re looking for individuals with a
                      proven track record in crypto trading. Pass our initial
                      assessment, and we’ll invest capital to support your
                      trading journey. Our mission is to create a platform where
                      everyone profits, not just us. With advanced technology
                      and a collaborative environment, we provide the resources
                      you need to succeed in the crypto market.
                    </p>
                  </Copy>
                </div>

                <div className="right-success">
                  <div className="lottie-wrapper2">
                    <Lottie animationData={successlotiesuc2} loop />
                  </div>
                </div>
              </div>

              <div className="platform-foot">
                <Copy>
                  <h2 className="text-xl md:text-3xl lg:text-5xl xl:text-6xl text-center mt-5">
                    Ready to take your trading to the next level with a platform
                    that invests in your success? Let’s get started.
                  </h2>
                </Copy>
              </div>

              <div className="contact-us">
                <Button
                  label={"Contact Us "}
                  customStyles={{
                    padding: "10px 40px",
                    border: "none",
                    backgroundImage: `
                  linear-gradient(180deg, #AA35DE 0%, #6D0D97 100%),
                  radial-gradient(176.93% 652.76% at 94.32% 6.17%, rgba(85, 51, 100, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%),
                  linear-gradient(0deg, rgba(189, 148, 201, 0.2), rgba(189, 148, 201, 0.2))`,
                    backgroundBlendMode: "overlay",
                  }}
                  onClick={() => {
                    const section = document.getElementById("connectus");
                    section?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default Success;
