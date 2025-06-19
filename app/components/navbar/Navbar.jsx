"use client";
import React, { useState, useEffect } from "react";
import logo from "../../asset/b2nesLogo.svg";
import { MdCall, MdClose } from "react-icons/md";
import "./navbar.css";
import Image from "next/image";
import Button from "../common/button/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [activeNav, setActiveNav] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsFixed(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "/", text: "Home", isRoute: true },
    { id: "why-choose", text: "Why B2NES", isRoute: false },
    { id: "how-it-works", text: "How It Works", isRoute: false },
    { id: "features", text: "Features", isRoute: false },
    { id: "/gallery", text: "Gallery", isRoute: true },
    { id: "about", text: "About Us", isRoute: false },
  ];

  const handleNavClick = (id, isRoute) => {
    setActiveNav(id);

    if (isRoute) {
      if (id === "/") {
        // Just navigate to home
        router.push(id);
      } else {
        // Navigate to other routes
        router.push(id);
      }
    } else {
      // For section navigation
      if (pathname !== "/") {
        // If we're not on the home page, navigate to home with scrollTo parameter
        router.push(`/?scrollTo=${id}`);
      } else {
        // If already on home page, just scroll to the section
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  useEffect(() => {
    // Sync activeNav with current route
    if (pathname === "/" || pathname === "/gallery") {
      setActiveNav(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    // Get the scrollTo parameter from URL
    if (pathname === "/") {
      const urlParams = new URLSearchParams(window.location.search);
      const scrollTo = urlParams.get("scrollTo");

      if (scrollTo) {
        const section = document.getElementById(scrollTo);
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveNav(scrollTo);

            // Remove the scrollTo param from URL without reloading
            const url = new URL(window.location.href);
            url.searchParams.delete("scrollTo");
            window.history.replaceState({}, "", url.pathname);
          }, 500); // Increased delay to ensure DOM is fully rendered
        }
      }
    }
  }, [pathname]);

  return (
    <div>
      {pathname !== "/gallery" && (
        <div className="noise-animation navbarnoise">
          {/* <Noise
            patternSize={250}
            patternScaleX={1}
            patternScaleY={1}
            patternRefreshInterval={2}
            patternAlpha={15}
          /> */}
        </div>
      )}

      <div className="aurora-wrapper">
        {/* <Aurora
          colorStops={["#1e3a8a", "#6d0d97", "#1e3a8a"]}
          blend={0.4}
          amplitude={1.2}
          speed={0.7}
          style={{ height: "100%" }}
        /> */}
      </div>
      <div className={`navbar-container ${isFixed ? "navbar-fixed" : ""}`}>
        <div className="container">
          <div className="navbar flex items-center justify-between">
            <div className="logo">
              <Image
                src={logo}
                className="max-w-[60px] sm:max-w-[75px]"
                alt="Logo"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="nav-items">
              <ul className="nav-items">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      onClick={() => handleNavClick(link.id, link.isRoute)}
                      className={activeNav === link.id ? "active-link" : ""}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
                <Button
                  onClick={() => handleNavClick("connectus", false)}
                  label={"CONTACT US"}
                  icon={<MdCall />}
                />
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu" onClick={() => setIsMenuOpen(true)}>
              <RxHamburgerMenu />
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`mobile-nav-overlay ${isMenuOpen ? "open" : ""}`}>
              <div className="mobile-nav-content">
                <button
                  className="close-btn"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MdClose />
                </button>
                <ul className="mobile-nav-items">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        onClick={() => {
                          handleNavClick(link.id, link.isRoute);
                          setIsMenuOpen(false);
                        }}
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                  <li>
                    <Button
                      onClick={() => {
                        handleNavClick("connectus", false);
                        setIsMenuOpen(false);
                      }}
                      label={"CONTACT US"}
                      icon={<MdCall />}
                      fullWidth
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;