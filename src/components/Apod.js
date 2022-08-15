// src/components/Apod.js

import React from  "react" ;

const apiKey = process.env.REACT_APP_NASA_KEY;

function Apod( {apod, user} ) {
  if (!apod) return <div />;
  const {date, title, explanation, media_type, url} = apod;

  return (
    user && (
    <>
      <h2>{user.first_name + " " + user.last_name}</h2>
      <div className="nasa-photo">
        {media_type === "image" ? (
          <img
            src={url}
            alt={title}
            className="photo"
          />
        ) : (
          <iframe
            title="space-video"
            src={url}
            frameBorder="0" 
            gesture="media" 
            allow="encrypted-media"
            allowFullScreen
            className="video"
          />
        )}
        <div>
          <h1>{title}</h1>
          <p className="date" >{date}</p>
          <p className="explanation" >{explanation}</p>
        </div>
      </div>
    </>
  ));
}

export default Apod;
