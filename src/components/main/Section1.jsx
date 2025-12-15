import React from 'react'
import Subsection1 from './Subsection1'
import Subsection2 from './Subsection2'



const Section1 = () => {
  return (
    <section id="home">
    <div className='min-h-screen bg-black px-6 py-10 flex justify-around max-md:p-0'>
         <Subsection1 />
         <Subsection2 />



    </div>
    </section>
  )
}

export default Section1