import Header from "../Components/Header"
import Start from '../Components/Start'
import Footer from '../Components/Footer'

import block1 from "../assets/block1.png"
import block2 from "../assets/block 2.png"
import block3 from "../assets/block 3.png"
import block4 from "../assets/block 4.png"
import arrowBlock from "../assets/arrow-block.png"
import rise from "../assets/rise.svg"
import strategy from "../assets/strategy.svg"
import closing from "../assets/closing.svg"

import AOS from 'aos'
import "aos/dist/aos.css"
import  { useEffect } from 'react'

function service() {
    useEffect(()=>{
      AOS.init({
          duration: 1300
      });
    }, [])

  return (
    <>
        <Header />
          <section className= "bg-gradient-to-r from-gray-800 bg-gray-950 h-max md:h-[50vh] lg:h-[50vh] flex flex-col justify-center gap-4 py-15 px-4 md:px-30 lg:px-30 text-white border-b border-b-gray-800">
            <h1 className='font-bold text-2xl' data-aos="fade-up">Elevate Your Real Estate Experience</h1>
            <p className='text-[13px]' data-aos="fade-up">Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.</p>
          </section >

          <div className=' bg-gray-950 text-white service md:rounded-none lg:rounded-none py-3 border-6 border-[#161621] px-3 gap-2 grid grid-cols-2 grid-rows-2 md:grid-cols-4 lg:grid-cols-4 md:grid-rows-none lg:grid-rows-none'>
            <div className='relative py-3 px-3 rounded text-center flex flex-col gap-2 md:gap-3 lg:gap-3 justify-center items-center bg-[#161621]' data-aos="fade-up">
                <img src={block1} alt="block" className='size-7' />
                <img src={arrowBlock} alt="arrow" className='absolute right-10 md:right-20 lg:right-20 top-3 size-5' />
                <p className='text-[14px]'>Find Your Dream Home</p>
            </div>
            <div className='relative py-3 px-3 rounded text-center flex flex-col gap-2 md:gap-3 lg:gap-3 justify-center items-center bg-[#161621]' data-aos="fade-up">
                <img src={block2} alt="block" className='size-7' />
                <img src={arrowBlock} alt="arrow" className='absolute right-10 md:right-20 lg:right-20 top-3 size-5' />
                <p className='text-[14px]'>Unlock Property Value</p>
            </div>
            <div className='relative py-3 px-3 rounded text-center flex flex-col gap-2 md:gap-3 lg:gap-3 justify-center items-center bg-[#161621]' data-aos="fade-left">
                <img src={block3} alt="block" className='size-7' />
                <img src={arrowBlock} alt="arrow" className='absolute right-10 md:right-20 lg:right-20 top-3 size-5' />
                <p className='text-[14px]'>Effortless Property Management</p>
            </div>
            <div className='relative py-3 px-3 rounded text-center flex flex-col gap-2 md:gap-3 lg:gap-3 justify-center items-center bg-[#161621]' data-aos="fade-left">
                <img src={block4} alt="block" className='size-7' />
                <img src={arrowBlock} alt="arrow" className='absolute right-10 md:right-20 lg:right-20 top-3 size-5' />
                <p className='text-[14px]'>Smart Investments, Informed Decisions</p>
            </div> 
          </div>  

          <section className='h-max py-11 md:py-13 lg:py-13 bg-gray-950 flex flex-col gap-10 text-white px-4 md:px-17 lg:px-17 '>
            <div className=''>
                <div className='flex flex-col gap-1 relative'>
                    <img src="../assets/Abstract Design star.svg" className='bg-white absolute left-1' alt="" />
                    <h2 className='font-bold text-2xl' data-aos="fade-up">Unlock Property Value</h2>
                    <p className='text-[13px]' data-aos="fade-up">Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey</p>
                </div>
            </div>
            <div className='flex flex-col gap-3 md:grid lg:grid md:grid-cols-3 lg:grid-cols-3 md:grid-rows-2 lg:grid-rows-2 md:gap-4 border border-gray-900'>
                {/* <StyleDivs items={contentArray}/> */}
                <div>
                  <div className=' px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg bg-gray-900 md:h-30 lg:h-30' data-aos="fade-left">
                    <div className="flex gap-2 items-center">
                      <img src={rise} alt="icon" className="size-5" />
                      <h2 className='text-[14px] font-bold'>Valuation Mastery</h2>
                    </div>
                    <p className='text-[13px] font-light' >Discover the true worth of your property with our expert valuation services.</p>
                  </div>
                </div>

                <div>
                  <div className=' px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg bg-gray-900 md:h-30 lg:h-30' data-aos="fade-left">
                  <div className="flex gap-2 items-center">
                      <img src={strategy} alt="icon" className="size-5" />
                      <h2 className='text-[14px] font-bold' >Strategic Marketing</h2>
                    </div>
                    <p className='text-[13px] font-light' >Strategic Marketing</p>
                  </div>
                </div>

                <div>
                  <div className=' px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg bg-gray-900 md:h-30 lg:h-30' data-aos="fade-left">
                  <div className="flex gap-2 items-center">
                      <img src={closing} alt="icon" className="size-5" />
                      <h2 className='text-[14px] font-bold' >Negotiation Wizardry</h2>
                    </div>
                    <p className='text-[13px] font-light' >Negotiating the best deal is an art, and our negotiation experts are masters of it.</p>
                  </div>
                </div>

                <div className=' md:flex lg:flex md:flex-col lg:flex-col'>
                  <div className='px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg bg-gray-900 md:h-30 lg:h-30' data-aos="fade-left">
                  <div className="flex gap-2 items-center">
                      <img src={block4} alt="icon" className="size-5" />
                      <h2 className='text-[14px] font-bold' >Closing Success</h2>
                    </div>
                    <p className='text-[13px] font-light' >A successful sale is not complete until the closing. We guide you through the intricate closing process.</p>
                  </div>
                </div>

                <div className=' md:flex lg:flex md:flex-col lg:flex-col md:col-span-2 lg:col-span-2'>
                <div className=' px-5 py-6 flex flex-col md:justify-center lg:justify-center gap-3 rounded-r rounded-b-lg bg-gradient-to-tl from-gray-700 md:h-30 lg:h-30' data-aos="fade-left">
                  <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-2 items-center mb-2 md:mb-1 lg:mb-1">
                      <h2 className='text-[14px] font-bold' >Unlock the Value of Your Property Today</h2>
                      <button className="text-[12px] w-[100%] md:w-max lg:w-max px-4 py-3 rounded-[7px] bg-gray-900 cursor-pointer">Learn More</button>
                    </div>
                    <p className='text-[13px] font-light' >Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
                  </div>
                </div>

            </div>
        </section>  


        <section className='h-max pt-2 pb-10 md:py-13 lg:py-13 bg-gray-950 flex flex-col gap-10 text-white px-4 md:px-17 lg:px-17 '>
            <div className=''>
                <div className='flex flex-col gap-1 relative'>
                    <img src="../assets/Abstract Design star.svg" className='bg-white absolute left-1' alt="" />
                    <h2 className='font-bold text-2xl' data-aos="fade-up">Effortless Property Management</h2>
                    <p className='text-[13px]' data-aos="fade-up">Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you</p>
                </div>
            </div>
            <div className='flex flex-col gap-3 md:grid lg:grid md:grid-cols-3 lg:grid-cols-3 md:grid-rows-2 lg:grid-rows-2 md:gap-4 border border-gray-900'>
                {/* <StyleDivs items={contentArray}/> */}
                <div>
                  <div className=' px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg bg-gray-900 md:h-30 lg:h-30' data-aos="fade-left">
                    <div className="flex gap-2 items-center">
                      <img src={rise} alt="icon" className="size-5" />
                      <h2 className='text-[14px] font-bold'>Tenant Harmony</h2>
                    </div>
                    <p className='text-[13px] font-light' >Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.</p>
                  </div>
                </div>

                <div>
                  <div className=' px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg bg-gray-900 md:h-30 lg:h-30' data-aos="fade-left">
                  <div className="flex gap-2 items-center">
                      <img src={strategy} alt="icon" className="size-5" />
                      <h2 className='text-[14px] font-bold' >Maintenance Ease</h2>
                    </div>
                    <p className='text-[13px] font-light' >Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.</p>
                  </div>
                </div>

                <div>
                  <div className=' px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg bg-gray-900 md:h-30 lg:h-30' data-aos="fade-left">
                  <div className="flex gap-2 items-center">
                      <img src={closing} alt="icon" className="size-5" />
                      <h2 className='text-[14px] font-bold' >Financial Peace of Mind</h2>
                    </div>
                    <p className='text-[13px] font-light' >Managing property finances can be complex. Our financial experts take care of rent collection</p>
                  </div>
                </div>

                <div className=' md:flex lg:flex md:flex-col lg:flex-col'>
                  <div className='px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg bg-gray-900 md:h-30 lg:h-30' data-aos="fade-left">
                    <div className="flex gap-2 items-center">
                      <img src={block4} alt="icon" className="size-5" />
                      <h2 className='text-[14px] font-bold' >Legal Guardian</h2>
                    </div>
                    <p className='text-[13px] font-light' >Stay compliant with property laws and regulations effortlessly.</p>
                  </div>
                </div>

                <div className=' md:flex lg:flex md:flex-col lg:flex-col md:col-span-2 lg:col-span-2'>
                  <div className=' px-5 py-6 flex flex-col md:justify-center lg:justify-center gap-3 rounded-r rounded-b-lg bg-gradient-to-tl from-gray-700 md:h-30 lg:h-30' data-aos="fade-left">
                  <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-2 items-center mb-2 md:mb-1 lg:mb-1">
                      <h2 className='text-[14px] font-bold' >Experience Effortless Property Management</h2>
                      <button className="text-[12px] w-[100%] md:w-max lg:w-max px-4 py-3 rounded-[7px] bg-gray-900 cursor-pointer">Learn More</button>
                    </div>
                    <p className='text-[13px] font-light' >Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                  </div>
                </div>
            </div>
        </section> 


        <section className='h-max pt-2 pb-10 md:py-13 lg:py-13 bg-gray-950 flex flex-col gap-5 md:gap-7 lg:gap-7 text-white px-4 md:px-17 lg:px-17 '>
          <div className="flex flex-col md:flex-row lg:flex-row gap-10">
            <div className="flex flex-col gap-4 md:max-w-80">
              <div className="md:max-w-80 lg:max-w-80 flex flex-col gap-3">
                <h2 className='font-bold text-2xl' data-aos="fade-up">Smart Investments, Informed Decisions</h2>
                <p className='text-[12px]' data-aos="fade-up">Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.</p>
              </div>
              <div className=' md:flex lg:flex md:flex-col lg:flex-col'>
                  <div className=' px-3 py-3 flex flex-col md:justify-center lg:justify-center gap-3 rounded-[7px] border border-gray-800 bg-gradient-to-tl from-gray-700' data-aos="fade-up">
                      <h2 className='text-[14px] font-bold' >Unlock Your Investment Potential</h2>
                      <p className='text-[12px] font-light' >Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                      <button className="text-[12px] w-[100%] px-4 py-3 rounded-[7px] bg-gray-900 cursor-pointer">Learn More</button>
                  </div>
                </div>
            </div>

            <div className="flex flex-col h-max p-2 rounded-[7px] md:h-80 lg:max-80 md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 gap-3 border border-gray-800">

              <div className='px-5 py-6 flex flex-col justify-center gap-3 rounded-[7px] bg-gray-900' data-aos="fade-left">
                <div className="flex gap-2 items-center">
                  <img src={block4} alt="icon" className="size-5" />
                  <h2 className='text-[14px] font-bold' >Market Insight</h2>
                </div>
                <p className='text-[13px] font-light' >Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditionsregulations effortlessly.</p>
              </div>

              <div className='px-5 py-6 flex flex-col justify-center gap-3 rounded-[7px] bg-gray-900' data-aos="fade-left">
                <div className="flex gap-2 items-center">
                  <img src={block4} alt="icon" className="size-5" />
                  <h2 className='text-[14px] font-bold' >ROI Assessment</h2>
                </div>
                <p className='text-[13px] font-light' >Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments</p>
              </div>

              <div className='px-5 py-6 flex flex-col justify-center gap-3 rounded-[7px] bg-gray-900' data-aos="fade-left">
                <div className="flex gap-2 items-center">
                  <img src={block4} alt="icon" className="size-5" />
                  <h2 className='text-[14px] font-bold' >Customized Strategies</h2>
                </div>
                <p className='text-[13px] font-light' >Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs</p>
              </div>

              <div className='px-5 py-6 flex flex-col justify-center gap-3 rounded-[7px] bg-gray-900' data-aos="fade-left">
                <div className="flex gap-2 items-center">
                  <img src={block4} alt="icon" className="size-5" />
                  <h2 className='text-[14px] font-bold' >Diversification Mastery</h2>
                </div>
                <p className='text-[13px] font-light' >Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations</p>
              </div>

            </div>


            </div>

        </section> 
        <Start />
        <Footer />
    </>
  )
}

export default service