import React from "react";



const  About = () => {
  const scrollToAbout = () => {
    document.getElementById("About").scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <div >
        <button className="hover:underline decoration-2 decoration-blue-400 underline-offset-6 cursor-pointer" onClick={scrollToAbout}>About</button>
        </div>
  )
}

export default  About