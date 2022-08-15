import React from "react";
import image from "/home/figue/Development/code/phase-3/phase-3-project-3/phase-3-react-project-frontend/src/images/nasa-S3hQU-5_yjg-unsplash.jpg"

function Home() {
  return (
    <>
      <div style={{ backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"contain", maxWidth:"100%", height:720, backgroundPosition:"top"}}>
        <h2 style={{ color:"white", width:"50%", marginRight:"auto", marginLeft:"auto" }}>Impressive Images of Our Universe that Coincide with the Month and Day of your Birth</h2> 
      </div>
    </>
  );
}

export default Home;