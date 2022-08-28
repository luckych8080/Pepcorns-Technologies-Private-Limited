import * as React from "react";
import "./youtube.css";

export default function YoutubeEmbed() {
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/biGcDeB2PbQ"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
