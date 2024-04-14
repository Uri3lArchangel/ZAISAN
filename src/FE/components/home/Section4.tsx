import Link from 'next/link'
import React from 'react'

function Section4() {
  return (
   
        <section className="text-black h-[100vh] md:flex flex-row-reverse justify-center items-center bg-white">
        <section className="h-[60%] flex items-center md:h-full md:w-[50%] md:transform md:translate-y-[-130px] relative z-[2]">
          <div className="title_container z-[2] relative text-center sm:text-left sm:max-w-[400px] sm:ml-20 ">
          <h2 className="text-2xl font-extrabold md:text-4xl ">Security  mechanisms</h2>
    
            <p className="text-[#000] font-medium md:text-xl my-6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d
iam nonumy eirmod tempor invidunt ut labore et dolore magn
a aliquyam erat, sed diam voluptua. At vero eos et accusam et
 justo duo dolores et ea rebum. Stet clita kasd gubergren, no s
ea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ips
um dolor sit amet, consetetur sadipscing elitr, sed diam nonum
y eirmod tempor invidunt ut labore et dolore magna aliquyam e
rat, sed diam voluptua. At vero eos et accusam et justo duo dol
            </p>
    
          </div>
        </section>
        <section className="h-[40%] md:h-full md:w-[50%]">
          {/* <Image src={hero} className="h-full" alt="mobile virtual shopping" /> */}
        </section>
      </section>   )
    }
    

export default Section4