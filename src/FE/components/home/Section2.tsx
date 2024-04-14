import Link from 'next/link'
import React from 'react'

function Section2() {
  return (
   
        <section className="text-black h-[100vh] md:flex justify-center items-center bg-white">
        <section className="h-[60%] flex items-center md:h-full md:w-[50%] md:transform md:translate-y-[-130px] relative z-[2]">
          <div className="title_container z-[2] relative text-center sm:text-left sm:max-w-[400px] sm:ml-20 ">
          <h2 className="text-2xl font-extrabold md:text-4xl ">How does the tokenization process work?.</h2>
    
            <p className="text-[#000] font-medium md:text-xl my-6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
diam nonumy eirmod tempor invidunt ut labore et dolore ma
gna aliquyam erat, sed diam voluptua. At vero eos et accusa
m et justo duo dolores et ea rebum. Stet clita kasd gubergre
n, no sea takimata 
            </p>
            <Link href="/app" className="bg-gray-200 mx-auto p-2 my-4 sm:mx-0 text-black" >
            Find out more 
        </Link>
          </div>
        </section>
        <section className="h-[40%] md:h-full md:w-[50%]">
          {/* <Image src={hero} className="h-full" alt="mobile virtual shopping" /> */}
        </section>
      </section>   )
    }
    

export default Section2