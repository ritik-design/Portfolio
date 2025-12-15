import react from "react";




import Name from "./header/name";
import Icons from "./header/icons/Icons";
import Navbar from "./header/icons/Navbar";

const Heading = () => {
  return (
    <div className="fixed h-20 w-full mt-0 flex font-sans justify-between items-center p-5  border-b-red-100 border-gray-200 shadow-sm shadow-gray-400 bg-black text-white">
        
       
        <Name />
        <Icons />
        <Navbar  />

         </div>
  )
}

export default Heading