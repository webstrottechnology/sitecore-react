import React, { useState } from "react";

import "./Youtube.scss";

import videoBg from "../../../assets/images/video-bg.png";

import heroVideo from "../../../assets/video/corporate-video.mp4";

const Youtube = () => {
  const [isVideoPlaying, setISVideoPlaying] = useState(false);
  return (
    <div className="hero-container">
      {!isVideoPlaying ? (
        <img src={videoBg} className="hero-bg" alt="background" />
      ) : (
        <video
          className="hero-bg"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* Overlay Content */}

      <div className="hero-content">
        <h2 className="subtitle">Global client from around the world</h2>
        <h1>We build ideas driven the future <br/> needs.</h1>

        {/* PLAY BUTTON */}
        {!isVideoPlaying && (
          <button className="play-btn" onClick={() => setISVideoPlaying(true)}>
            ▶
          </button>
        )}

        {/* CLOSE BUTTON */}
        {isVideoPlaying && (
          <button
            className="pause-btn"
            onClick={() => setISVideoPlaying(false)}
          >
            ❚❚
          </button>
        )}
      </div>
      <div className="hero-bottom">
        <h4>Get up to - 50% offer on your first project booking</h4>
        <h4>Call On +1(123) 456-7890</h4>
      </div>
    </div>
  );
};

export default Youtube;
