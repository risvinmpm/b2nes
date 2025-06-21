// app/gallery/Gallery.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import videoimg from "../asset/video.png";
import menimg from "../asset/men.png";
import s1img from "../../app/asset/s1.jpeg";
import s2img from "../../app/asset/s2.jpeg";
import s3img from "../../app/asset/s3.jpeg";
import "./gallery.css";

const photoImages = [s1img, s2img, s3img];

const videoData = [
  {
    id: 1,
    thumbnail: videoimg,
    embedUrl: "https://www.youtube.com/embed/wjPu-pwM-yc",
  },
  {
    id: 2,
    thumbnail: menimg, // Replace with actual thumbnail images for videos
    embedUrl: "https://www.youtube.com/embed/lrv9uSrMdl0",
  },
  {
    id: 3,
    thumbnail: videoimg, // Replace with actual thumbnail images for videos
    embedUrl: "https://www.youtube.com/embed/WY7cv8lmTSA",
  },
];

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
    <div>
      {/* Video Popup Modal */}
      {selectedVideo && (
        <div className="video-modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedVideo(null)}>
              &times;
            </span>
            <iframe
              width="560"
              height="315"
              src={selectedVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <div className="container">
        <div className="video-section">
          <p>Video </p>
          <div className="videos">
            {/* <Image src={videoimg} alt="" /> */}
            <a
              href="https://www.youtube.com/@ghazibentounes9490"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={videoimg} alt="YouTube Channel" />
            </a>
            {videoData.map((video) => (
              <div
                key={video.id}
                className="video-thumbnail"
                onClick={() => setSelectedVideo(`${video.embedUrl}?autoplay=1`)}
              >
                <Image
                  src={video.thumbnail}
                  alt={`Video ${video.id}`}
                  layout="responsive"
                />
                <div className="play-button">▶</div>
              </div>
            ))}
          </div>
        </div>
        <div className="photo-section">
          <p>Photo</p>
          <div className="photos">
            {photoImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`photo-${index}`}
                style={{
                  borderRadius: "10px",
                  objectFit: "cover",
                  width: "100%",
                  height: "171px!important",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
