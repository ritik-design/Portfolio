import React from "react";



const Home = () => {
  const scrollToHome = () => {
    document.getElementById("home").scrollIntoView({
      behavior: 'smooth',
    });
  };

return (
   
    <div >
      <button className=" hover:underline decoration-2 decoration-blue-400 underline-offset-6 cursor-pointer " onClick={scrollToHome}>Home</button>
      
      
      </div>
   
  )
}

export default Home