import Image from 'next/image'
import React from 'react'
import zaisan from '@/public/Zaisan Invest_Logo_5 1.png'

function page() {
  return (
<section className='p-20'>
    <section className='border-l border-r border-t border-black p-10'>
    <small className='underline py-2 block text-center my-10'>6 MIN. LESEZEIT</small>
    <div className='flex'>
        <div className='border-r border-black'><Image src={zaisan} alt='zaisan ' / ></div>
        <div>
            
            <h1 className='text-3xl max-w-[400px] px-6'>Making Real Estate Investments accessible to everyone with the
power of Blockchain</h1></div>
    </div>
    <main>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt u
t labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolore
s et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lore
m ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut lab
ore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et e</main>
</section>
</section>  

)
}

export default page