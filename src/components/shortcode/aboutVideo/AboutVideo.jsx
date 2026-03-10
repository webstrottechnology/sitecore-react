import React, { useState } from "react";
import videoData from "./aboutVideoData";
import "./AboutVideo.scss";

/* ---------------- ABOUT INNER VIDEO PAGE---------------- */

const AboutVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section
        className="innerpagesVideoSection fadein"
        id="innerpagesVideoSection"
        style={{ backgroundImage: `url(${videoData.bgImage})` }}
      >
        <div className="innerpagesVideoInner">
          <div className="container">
            <h2 className="d-none">video</h2>

            <div className="innerpagesVideoPlay fadein">
              <button className="playBtn" onClick={() => setShowVideo(true)}>
                <img
                  src={videoData.playIcon}
                  alt="play-btn"
                  className="img-fluid pulse"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showVideo && (
          <div className="videoModal">
            <div className="videoModalContent">
              <button className="closeBtn" onClick={() => setShowVideo(false)}>
                ✕
              </button>

              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${videoData.youtubeId}?autoplay=1`}
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AboutVideo;
