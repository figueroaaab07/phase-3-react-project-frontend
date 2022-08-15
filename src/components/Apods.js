import React from "react";
import ApodImage from "./ApodImage";

function Apods({ apods, user, imageClick }) {
  return (
    user && (
      <>
        <h2>{user.first_name + " " + user.last_name}</h2>
        <div className="row">
          {(apods?.map(apod => <ApodImage key={apod.id} apod={apod} imageClick={imageClick} />))}
        </div>
      </>
    )
  )
}

export default Apods;
