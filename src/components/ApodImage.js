import React from "react";

function ApodImage({ apod, imageClick }) {
  if (!apod) return <div />;
  const {id, title, url, media_type} = apod;

  return (
    <div className="column">
      {media_type === "image" ? (
        <img
          id={id}
          src={url}
          alt={title}
          width="100%"
          onClick={() => imageClick(apod)}
        />
      ) : (
        <iframe
          id={id}
          title={title}
          src={url}
          frameBorder="0" 
          gesture="media" 
          allow="encrypted-media"
          allowFullScreen
          onClick={() => imageClick(apod)}
        />
      )}
    </div>
  )
}

export default ApodImage;