import React from "react";



const  Contact = () => {
  const scrollToContact = () => {
    document.getElementById("Contact").scrollIntoView({
      behavior:"smooth",
    })
  }
  return (
   
    <div  >
      
      <button className=" hover:underline decoration-2 decoration-blue-400 underline-offset-6 cursor-pointer " onClick={scrollToContact}>Contact</button>

        
        </div>
  )
}

export default  Contact