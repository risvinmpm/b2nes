"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import "react-phone-input-2/lib/style.css";
import "./connect.css";
import Button from "../common/button/Button";
import contactimg from "../../asset/contactright.png";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import ReactLenis from "@studio-freight/react-lenis";
import Copy from "../common/Copy";
import Swal from "sweetalert2";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Message sent successfully!",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.message || "Failed to send message",
        });
      }
    } catch (error) {
      // setStatus("An error occurred. Please try again later.");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xqaqwgye", {
        method: "POST",
        body: form,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Message sent successfully!",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });

        e.target.reset();
        setFormData({ name: "", email: "", phone: "", message: "" });
        // setStatus("Thanks for your message!");
        // e.target.reset();
      } else {
        const data = await response.json();
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data?.message || "Failed to send message.",
        });
        // setStatus("Oops! Something went wrong.");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred. Please try again later.",
      });
      // setStatus("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ReactLenis root>
        <div id="connectus">
          <div className="connect-us relative">
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              {/* <Noise
            patternSize={250}
            patternScaleX={1}
            patternScaleY={1}
            patternRefreshInterval={2}
            patternAlpha={15}
          /> */}
            </div>
            {/* <div className="globe-animat">
          <GlobeDemo />
        </div> */}
            <div className="container relative z-1">
              <div className="parent-connect">
                <div className="left-connect">
                  <Copy>
                    <h2>Ready to Join B2NES? Let’s Connect</h2>
                  </Copy>
                  <Copy>
                    <p className="connectpara">
                      Join the B2NES family and unlock the future of crypto
                      brokerage. Whether you’re a seasoned broker or just
                      starting out, our team is here to support you every step
                      of the way.
                    </p>
                  </Copy>
                  <div className="coonecting-media">
                    <div className="location">
                      {/* <FaLocationDot /> */}
                      <Copy>
                        <p>JLT, Dubai, UAE</p>
                      </Copy>
                    </div>
                    <div className="mail">
                      {/* <MdEmail /> */}
                      <Copy>
                        <p>info@b2nes.com</p>
                      </Copy>
                    </div>
                    <div className="call">
                      {/* <MdCall /> */}
                      <Copy>
                        <p>+971-4575 2941</p>
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="right-connect">
                  <div className="contact-us-form">
                    {/* <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                /> */}
                    <Image className="contactimg" src={contactimg} alt="" />
                    <div className="heading">
                      <Copy>
                        <h2>Contact Us </h2>
                      </Copy>
                      <Copy>
                        <p>
                          Join the B2NES family and unlock the future of crypto
                          brokerage. Whether you’re a seasoned broker or just
                          starting out, our team is here to support you every
                          step of the way. 
                        </p>
                      </Copy>
                    </div>
                    <div className="connectForm">
                      <form
                        //  onSubmit={handleSubmit}
                        onSubmit={handleFormSubmit}
                      >
                        <div className="name-field">
                          <label htmlFor="">Name*</label>
                          <input
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            name="name"
                            id="name"
                          />
                        </div>
                        <div className="email-phone">
                          <div className="name-field">
                            <label htmlFor="">Email*</label>
                            <input
                              type="email"
                              placeholder="Sample@gmail.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              name="email"
                              id="email"
                            />
                          </div>
                          <div className="name-field">
                            <label htmlFor="" style={{ paddingBottom: "10px" }}>
                              Phone*
                            </label>
                            {/* <input
                          type="tel"
                          placeholder="+91"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          name="phone"
                          id="phone"
                        /> */}
                            <PhoneInput
                              country={"in"}
                              value={formData.phone}
                              onChange={(phone) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  phone,
                                }))
                              }
                              inputProps={{
                                name: "phone",
                                required: true,
                                id: "phone",
                              }}
                              inputStyle={{
                                width: "100%",
                                padding: "10px 55px",
                                background: "transparent",
                                border: "none",
                                borderBottom: "1px solid #2a3956",
                                outline: "none",
                              }}
                            />
                          </div>
                        </div>
                        <div className="name-field textareafield">
                          <label htmlFor="">Let’s Talk*</label>
                          <textarea
                            type="text"
                            placeholder="We are happy to hear"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            name="message"
                            id="message"
                          />
                        </div>
                        <div className="submit-btn">
                          <Button
                            label={loading ? "Sending..." : "Submit"}
                            customStyles={{
                              padding: "10px 30px",
                              border: "none",
                              opacity: loading ? 0.7 : 1,
                              cursor: loading ? "not-allowed" : "pointer",
                            }}
                            disabled={loading}
                            type="submit"
                          />
                        </div>
                        {status && (
                          <div
                            className={`form-status ${
                              status.includes("success") ? "success" : "error"
                            }`}
                          >
                            {status}
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                  {/* end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default Connect;
