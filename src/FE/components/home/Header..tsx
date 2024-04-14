import React from 'react'
import Image from "next/image";
import Link from "next/link";
// import hero from "@/public/hero.jpg";

const Header = () => {
  return (

    <header className="header h-[100vh] flex justify-center items-center">
    <section className="h-[60%] flex items-center md:h-full md:w-[50%] md:transform md:translate-y-[-130px] relative z-[2]">
      <div className="title_container z-[2] relative text-center sm:text-left sm:max-w-[400px] sm:ml-20 ">
        <p className="text-[#fff] font-medium md:text-xl my-4">
        Making Real Estate Investments accessible to everyone with the
power of Blockchain
        </p>
        <Link href="/app" className="bg-gray-200 mx-auto p-2 my-4 sm:mx-0">
        start investing
        </Link>
      </div>
    </section>
    <section className="h-[40%] md:h-full md:w-[50%] hidden md:block">
      {/* <Image src={hero} className="h-full" alt="mobile virtual shopping" /> */}
    </section>
  </header>  )
}

export default Header