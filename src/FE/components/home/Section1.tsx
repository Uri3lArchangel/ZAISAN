import Link from 'next/link'
import React from 'react'

const Section1 = () => {
  return (
    <section className="text-white h-[100vh] md:flex justify-center items-center bg-black">
    <section className="h-[60%] flex items-center md:h-full md:w-[50%] md:transform md:translate-y-[-130px] relative z-[2]">
      <div className="title_container z-[2] relative text-center sm:text-left sm:max-w-[400px] sm:ml-20 ">
      <h2 className="text-xl font-extrabold md:text-2xl">It is time to redefine the term &quot;equity&quot;.</h2>

        <p className="text-[#fff] font-medium md:text-xl my-4">
        Lorem ipsum dolor sit amet, consetetur sadipscing 
elitr,sed diam nonumy eirmod tempor invidunt ut la
bore et dolore agna aliquyam erat, sed diam voluptua.
 At vero eo
s et accusamet justo duo dolores et ea rebum. Stet 
clita kasd guergren, no sea takimata sanctus est Lore
m ipsum do
lor sit amet. Loem ipsum dolor sit amet, consetetur sa
dipscing elitr, 
sed diam numy eirmodempor invidunt ut labore et dolo
re magna aliquyam
 erat, sed divoluptua. At vero eos et accusam et justo
 duo dolores et ea rebum.
 Stet clita kasd gubergren, no sea takimata sanctus est  
dolor sit amet.
        </p>
      
      </div>
    </section>
    <section className="h-[40%] md:h-full md:w-[50%]">
      {/* <Image src={hero} className="h-full" alt="mobile virtual shopping" /> */}
    </section>
  </section>   )
}

export default Section1