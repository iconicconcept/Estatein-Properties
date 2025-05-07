import React from 'react'

const Start = () => {
  return (
    <>
        <section className='startReal gap-8 md:gap-20 lg:gap-20 h-max py-8 md:py-13 lg:py-13 px-5 md:px-30 lg:px-30 flex flex-col md:flex-row lg:flex-row bg-gray-950 text-white border border-gray-800 '>
            <div className='flex flex-col gap-3' data-aos="fade-up">
                <h2 className='font-semibold text-2xl'>Start Your Real Estate Journey Today</h2>
                <p className='md:max-w-250 lg:max-w-250 text-[14px]'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
            </div>
            <div className='flex items-end'>
            <button className='cursor-pointer px-2 py-3 rounded bg-purple-700 w-max' data-aos="fade-right">Explore Properties</button>
            </div>
        </section>
    </>
  )
}

export default Start