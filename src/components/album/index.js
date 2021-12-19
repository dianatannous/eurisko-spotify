import React from "react";

import "./album.css";

export const Album = ({ img, artist, name, tracks, date, preview }) => {
  return (
    <div className="col-lg-3 col-md-6 col-8">
      <div className="album">
        <div className="album-border">
          <div className="album-img">
            <img src={img} alt="album-img" />
          </div>
          <div className="album-content">
            <div className="album-title">
              <h3>{name}</h3>
              <p>{artist}</p>
            </div>
            <div className="album-information">
              <p>{date}</p>
              <p>{tracks} tracks</p>
            </div>
          </div>
          <div className="album-btn">
            <a href={preview} target="_blank">
              {" "}
              <button> Preview on Spotify</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
