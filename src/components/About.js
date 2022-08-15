import React from "react";
import image from "/home/figue/Development/code/phase-3/phase-3-project-3/phase-3-react-project-frontend/src/images/hs-2015-01m16pillarshst1.jpg"

function About() {
  return (
    <>
      <div style={{ backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"contain", maxWidth:"100%", height:720, backgroundPosition:"top"}}>
        <p style={{ color:"white", width:"50%", marginRight:"auto", marginLeft:"auto" }}>Astronomy Picture of the Day is a website provided by NASA and Michigan Technological University. According to the website, "Each day a different image or photograph of our universe is featured, along with a brief explanation written by a professional astronomer." Wikipedia
Date launched: June 16, 1995
Available in: English (primary)</p> 
      </div>
    </>
  );
}

export default About;
