"use client";
import React, { useState } from "react";
import instagramimg from "../../asset/insta.png";
import linkedinimg from "../../asset/linked.png";
import twitterimg from "../../asset/twiter.png";
import footerlogo from "../../asset/B2NES.png";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import "./footer.css";
import ReactLenis from "@studio-freight/react-lenis";
import Copy from "../common/Copy";

const Footer = () => {
  const router = useRouter(); // Router hook for navigation
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(""); // Track active link
  const socialMedia = [
    {
      label: "Instagram",
      image: instagramimg,
      link: "https://instagram.com",
    },
    { label: "LinkedIn", image: linkedinimg, link: "https://linkedin.com" },
    { label: "Twitter", image: twitterimg, link: "https://twitter.com" },
  ];
  const footerLinks = [
    { id: "/", text: "Home", isRoute: true },
    { id: "why-choose", text: "Why B2NES", isRoute: false },
    { id: "how-it-works", text: "How It Works", isRoute: false },
    { id: "features", text: "Features", isRoute: false },
    { id: "/gallery", text: "Gallery", isRoute: true },
    { id: "about", text: "About Us", isRoute: false },
    { id: "connectus", text: "Contact", isRoute: false },
  ];

  const handleNavClick = (id, isRoute) => {
    setActiveLink(id);

    if (isRoute) {
      router.push(id); // Navigate to route
    } else {
      if (pathname !== "/") {
        // If not on home page, navigate to home with scrollTo parameter
        router.push(`/?scrollTo=${id}`);
      } else {
        // If already on home page, just scroll to section
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  // Sync active link with current route
  React.useEffect(() => {
    if (pathname === "/" || pathname === "/gallery") {
      setActiveLink(pathname);
    }
  }, [pathname]);
  return (
    <>
      <ReactLenis root>
        <div>
          <div className="container">
            <div className="footer-parent overflow-x-hidden">
              <div className="foot-t1">
                <Copy>
                  <Image src={footerlogo} alt="logo" />
                </Copy>
                <Copy>
                  <p>
                    B2NES is a licensed crypto brokerage operating under Dubai’s
                    regulatory framework. Trading involves risks; please consult
                    a financial advisor.
                  </p>
                </Copy>
              </div>
              <div className="foot-pent">
                <div className="foot-t2">
                  <Copy>
                    <h2>Quick Links</h2>
                  </Copy>
                  <div className="quick-links">
                    <div className="nav-items-footer">
                      <Copy>
                        <ul className="nav-items-footer">
                          {footerLinks.map((link) => (
                            <li key={link.id}>
                              <a
                                onClick={() =>
                                  handleNavClick(link.id, link.isRoute)
                                }
                                className={
                                  activeLink === link.id ? "active-link" : ""
                                }
                              >
                                {link.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="foot-t3">
                  <Copy>
                    <h2>Follow Us</h2>
                  </Copy>
                  <div className="social-media">
                    <Copy>
                      {socialMedia.map((item, index) => (
                      <div className="follow-icons" key={index}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={item.image} alt={item.label} />
                          <p>{item.label}</p>
                        </a>
                      </div>
                    ))}
                    </Copy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <p>
              <span>Copyright:</span> © 2025 B2NES. All Rights Reserved {" "}
            </p>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default Footer;
