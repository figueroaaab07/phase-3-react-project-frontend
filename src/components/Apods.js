import React from "react";
import Apod from "./Apod";

function Apods({ apods }) {
  return (
    <div className="row">
      {(apods?.map(apod => <Apod key={apod.id} apod={apod} />))}
    </div>
  )
}

export default Apods;
