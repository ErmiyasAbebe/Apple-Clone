import React, { useState, useEffect } from "react";
import "./YouTubeVideos.css";

// const API_KEY = process.env.REACT_APP_APPLE_YOUTUBE_API_KEY;

function YouTubeVideos() {
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=AIzaSyDTzVWpB70dXpO-nruxm6ZwN1U89g0KkH4"
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeVideosData = data.items;

        setVideos(youTubeVideosData);
      });
  }, []);

  console.log(Videos);

  return (
    <div className="allVideoWrapper">
      <div className="container">
        <div className="row justify-content text-center">
          <div className="col-12">
            <div className="title-wrapper">
              <h2>YouTube Videos </h2>
              <p6>Latest videos</p6>
              <br />
              <br />
            </div>
          </div>
          {Videos?.map((singleVideo) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noreferrer">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
}

export default YouTubeVideos;
