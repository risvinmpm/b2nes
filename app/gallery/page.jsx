// app/gallery/page.jsx
import React from "react";
import Gallery from "./gallery";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function GalleryPage() {
  return (
    <div>
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
}
