"use client";
import React, { useEffect, useCallback, useState } from "react";
import dynamic from "next/dynamic";
import Button from "../common/button/Button";
import "./banner.css";
import Image from "next/image";
import { FiChevronsDown } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";
import { ReactLenis } from "@studio-freight/react-lenis";
import Copy from "../common/Copy";

const Banner = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Scroll to Why Choose
  const scrollToWhyChoose = useCallback(() => {
    const section = document.getElementById("why-choose");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Scroll to Connect Us
  const scrollToConnect = useCallback(() => {
    if (pathname !== "/") {
      router.push("/");

      setTimeout(() => {
        const connectSection = document.getElementById("connectus");
        if (connectSection) {
          connectSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 600); // delay to allow navigation + mount
    } else {
      const connectSection = document.getElementById("connectus");
      if (connectSection) {
        connectSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [pathname, router]);

  return (
    <>
      <ReactLenis root>
        <div className="banner-section">
          <div className="banner-bg">
            {/* 3D Models */}
            {/* <div className="threeD-img">
          <div>
            <ThreeDViewer url="/scene.gltf" />
          </div>
        </div>
        <div className="coin">
          <div>
            <ThreeDViewerCoin url="/bitcoin_high_detail.glb" />
          </div>
        </div> */}

            {/* Banner content */}
            <div className="banner-content">
              {/* <AnimatedHeading text="Focus on Trading, We Take Care of the Rest" /> */}
              {/* <TextGenerateEffect words="Focus on Trading, We Take Care of the Rest" /> */}
              <Copy>
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-white">
                  Focus on Trading, We Take Care of the Rest
                </h1>
              </Copy>
              <Copy>
                <p>
                  Have a proven crypto track record? Pass our assessment, and
                  we’ll invest in your trading journey. At B2NES, our goal is
                  shared success – everyone profits, not just us.
                </p>
              </Copy>

              <div className="broker-now-btn">
                <Button
                  label="BECOME A BROKER NOW"
                  customStyles={{
                    fontSize: "16px",
                    border: "1px solid #A324DA",
                    background:
                      "linear-gradient(0deg, rgba(189, 148, 201, 0.20) 0%, rgba(189, 148, 201, 0.20) 100%), " +
                      "radial-gradient(656.05% 299.74% at 94.32% 6.17%, rgba(85, 51, 100, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), " +
                      "linear-gradient(180deg, #AA35DE 0%, #6D0D97 100%)",
                  }}
                  onClick={scrollToConnect}
                />
              </div>

              <div className="down-arrow" onClick={scrollToWhyChoose}>
                <FiChevronsDown />
              </div>

              <div id="why-choose" />
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default Banner;
