
import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";

const VideoPlayer = (props) => {

    const videoPlayerRef = useRef(null); 
    const [currentTime, setCurrentTime] = useState(null);
    const videoSrc = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";
    const videoJSOptions = {
      autoplay: "muted",
      controls: true,
      loop: true,
      userActions: { hotkeys: true },
      playbackRates: [0.5, 1, 1.5, 2]
    };

    useEffect(() => {
        if (videoPlayerRef) {
          const player = videojs(videoPlayerRef.current, videoJSOptions, () => {
            player.src(videoSrc);
            player.on("ended", () => {
              console.log("ended");
            });
            player.on("timeupdate", () => {
              setCurrentTime(player.currentTime());
            });
            console.log("Player Ready");
          });
        }
        return () => {};
      }, []);

      return (
        <div>
          <video
            ref={videoPlayerRef}
            className="video-js"
          />
          <span className="videotime">Current Time: {currentTime}</span>
        </div>
      );

};
export default VideoPlayer;