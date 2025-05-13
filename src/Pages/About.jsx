import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Start from '../Components/Start'
import House from "../assets/aboutHouse.svg"
import block2 from "../assets/block 2.png"
import block3 from "../assets/block 3.png"
import block4 from "../assets/block 4.png"
import max from "../assets/maxs.svg"
import david from "../assets/david.svg"
import sarah from "../assets/sarah.svg"
import micheal from "../assets/micheal.svg"
import twitter from "../assets/twitter.svg"
import telegram from "../assets/telegram.svg"
// import StyleDivs from "../Components/contents"

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { aboutBox } from '../Components/contents'
import { achievement } from '../Components/contents'

function About() {
  useEffect(()=>{
          AOS.init({
              duration: 1300
          });
      }, [])

      

      const Sent = ()=>{
        alert("Message Sent!");
      }

      const Connect = ()=>{
        alert("Currently Not Available")
      }

      const Disclose = ()=>{
        alert("Cannot be Disclose")
      }

  return (
    <>
        <Header />
        <section className="bg-gray-950 h-max md:h-[80vh] lg:h-[80vh] flex flex-col md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 lg:flex-row-reverse relative overflow-y-hidden">
                <div className='order-1 md:order-2 lg:order2 h-[100%] flex items-center justify-center'>
                    <img src={House} alt="building" className='pop rounded lg:rounded-none px-4 md:px-0 lg:px-0 py-3 md:py-0 lg:py-0 md:h-100 lg:h-100' />
                </div>
                <div className='bg-gray-950 h-max md:h-[100%] lg:h-[100%] py-5 pt-10 px-5 md:pl-17 lg:pl-17 text-white flex flex-col gap-5 md:gap-8 lg:gap-8 order-2 md:order-1 lg:order1 md:flex justify-center' data-aos="fade-up">
                    <h1 className=' font-semibold text-[24px] md:text-[30px]' data-aos="fade-up">Our Journey</h1>
                    <p data-aos="fade-up">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>

                    <div className='anim flex flex-col md:flex-row lg:flex-row gap-2 md:gap-3 lg:gap-3'>
                        <div className='grid grid-cols-2 gap-1 md:gap-3 lg:gap-3'>
                            <div className='bg-[#161621] py-3 md:px-5 lg:px-5 flex flex-col items-center justify-center rounded' data-aos="fade-up">
                                <h2 className='text-[22px] font-bold'>200+</h2>
                                <p className='text-[14px]'>Happy Customers</p>
                            </div>
                            <div className='bg-[#161621] py-3 flex flex-col items-center justify-center rounded' data-aos="fade-up">
                                <h2 className='text-[22px] font-bold'>10K+</h2>
                                <p className='text-[14px]'>Properties for Clients</p>
                            </div>
                        </div>
                        <div className='bg-[#161621] py-3 md:px-3 lg:px-3 flex flex-col items-center justify-center rounded' data-aos="fade-up">
                                <h2 className='text-[22px] font-bold'>16+</h2>
                                <p className='text-[14px]'>Years of Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-950 h-max md:h-[70vh] lg:h-[70vh] flex flex-col md:flex-row lg:flex-row gap-6 md:gap-7 lg:gap-7 md:items-center lg:items-center text-white px-4 py-8 md:px-17 lg:px-17">
              <div className='md:max-w-3xl lg:max-w-70'>
                <h1 className=' font-semibold text-[24px] md:text-[30px]' data-aos="fade-up">Our Values</h1>
                <p className='text-[14px]' data-aos="fade-up">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
              </div>
              <div className=' bg-gray-950 text-white service rounded md:rounded-none lg:rounded-none py-3 border-6 border-[#161621] px-3 flex flex-col md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 grid-rows-2 md:grid-rows-none lg:grid-rows-none'>
                  <div className='relative py-3 rounded flex flex-col gap-4 md:gap-5 lg:gap-5 justify-center items-start bg-[#161621] px-5 pb-10 md:border-b-0 lg:border-b-0 border-b' data-aos="fade-up">
                      <div className='flex gap-3 items-center'>
                        <img src={block4} alt="block" className='size-7' />
                        <p className='text-[13px] font-bold'>Trust</p>
                      </div>
                      <p className='text-[12px] font-light'>Trust is the cornerstone of every successful real estate transaction.</p>
                  </div>
                  <div className='relative py-3 px-5 rounded  flex flex-col gap-4 md:gap-5 lg:gap-5 justify-center items-start bg-[#161621] pb-10 md:border-b-0 lg:border-b-0  border-b' data-aos="fade-up">
                      <div className='flex gap-3 items-center'>
                        <img src={block3} alt="block" className='size-7' />
                        <p className='text-[13px] font-bold'>Excellence</p>
                      </div>
                      <p className='text-[12px] font-light'>We set the bar high for ourselves. From the properties we list to the services we provide.</p>
                  </div>
                  <div className='relative py-3 px-5 rounded flex flex-col gap-4 md:gap-5 lg:gap-5 justify-center items-start bg-[#161621] pb-10 md:border-b-0 lg:border-b-0  border-b' data-aos="fade-up">
                      <div className='flex gap-3 items-center'>
                        <img src={block2} alt="block" className='size-7' />
                        <p className='text-[13px] font-bold'>Client-Centric</p>
                      </div>
                      <p className='text-[12px] font-light'>Your dreams and needs are at the center of our universe. We listen, understand.</p>
                  </div>
                  <div className='relative py-3 px-5 rounded flex flex-col gap-4 md:gap-3 lg:gap-5 justify-center items-start bg-[#161621] pb-10 md:border-b-0 lg:border-b-0 border-b' data-aos="fade-up">
                      <div className='flex gap-3 items-center'>
                        <img src={block4} alt="block" className='size-7' />
                        <p className='text-[13px] font-bold'>Our Commitment</p>
                      </div>
                      <p className='text-[12px] font-light'>We are dedicated to providing you with the highest level of service, professionalism</p>
                  </div>       
              </div>
            </section>

            <section className='h-max py-10 bg-gray-950 flex flex-col gap-10 text-white px-4 md:px-17 lg:px-17 '>
            <div className=''>
              <img src="../assets/sDesign.png" className='bg-white' alt="" />
                <div className='flex flex-col gap-1 relative'>
                    <img src="../assets/Abstract Design star.svg" className='bg-white absolute left-1' alt="" />
                    <h2 className='font-bold text-2xl' data-aos="fade-up">Our Achievements</h2>
                    <p className='text-[13px]' data-aos="fade-up">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
                </div>
            </div>
            <div className='md:grid lg:grid flex flex-col md:grid-cols-3 lg:grid-cols-3 grid-cols-3 gap-5 h-max border-b-[#161621] border-b-2'>
                {achievement.map((item)=>{
                  return(
                    <div className='h-max p-4 bg-gray-950 border md:flex lg:flex flex-col gap-5 rounded-2xl' data-aos="fade-up" key={item.id}>
                      <div className='flex flex-col gap-2 px-2' data-aos="fade-left">
                        <h3 className="text-[17px] font-bold">{item.heading}</h3>
                        <p className='text-[14px]'>{item.paragraph}</p>
                      </div>
                    </div>
                  )
                })}

            </div>
        </section>

        <section className='h-max py-10 bg-gray-950 flex flex-col gap-10 text-white px-4 md:px-17 lg:px-17 '>
            <div className=''>
                <div className='flex flex-col gap-1 relative'>
                    <img src="../assets/Abstract Design star.svg" className='bg-white absolute left-1' alt="" />
                    <h2 className='font-bold text-2xl' data-aos="fade-up">Navigating the Estatein Experience</h2>
                    <p className='text-[13px]' data-aos="fade-up">At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.</p>
                </div>
            </div>
            <div className='flex flex-col gap-3 md:grid lg:grid md:grid-cols-3 lg:grid-cols-3 md:grid-rows-2 lg:grid-rows-2 md:gap-4 '>      
              {aboutBox.map((item)=>{
                return(
                <div key={item.id}>
                  <div className='border-l border-l-purple-400 px-3 py-2' data-aos="fade-up">
                    < p className='text-[13px]'>
                        {item.number}
                    </p>
                  </div>

                  <div className='border px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg bg-gradient-to-tr from-purple-500' data-aos="fade-left">
                    <h2 className='text-[17px] font-bold' >{item.heading}</h2>
                    <p className='text-[14px] font-light' >{item.paragraph}</p>
                  </div>
                </div>
                ) 
              })}
            </div>
        </section>


        <section className='h-max py-10 bg-gray-950 flex flex-col gap-10 text-white px-4 md:px-17 lg:px-17 '>
            <div className='flex flex-col gap-1 relative'>
                <img src="../assets/Abstract Design star.svg" className='bg-white absolute left-1' alt="" />
                <h2 className='font-bold text-2xl' data-aos="fade-up">Meet the Estatein Team</h2>
                <p className='text-[13px]' data-aos="fade-up">At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.</p>
            </div>
            <div className='flex flex-col gap-5 md:grid lg:grid md:grid-cols-4 lg:grid-cols-4 md:gap-6 lg:gap-6 '>
                <div className='flex flex-col gap-6 items-center justify-center p-5 border border-gray-700 rounded-[13px]' data-aos="fade-up">
                  <div className='relative flex flex-col items-center'>
                    <img src={max} alt="max" />
                    <img src={twitter} alt="twitter" className='size-15 absolute top-55 left-30 md:size-10 lg:size-10 md:top-40 lg:top-40 md:left-21 lg:left-21 cursor-pointer' onClick={Connect} />
                  </div>  
                  <div className='mt-6 flex flex-col items-center'>
                    <h2 className='font-bold text-2xl md:text-[16px] lg:text-[16px]'>Max Mitchell</h2>
                    <p className='text-[14px] md:text-[13px] lg:text-[13px]'>Founder</p>
                  </div>
                  <div className='border rounded-3xl flex justify-between w-[100%] px-5 py-3 md:py-2 lg:py-2 md:text-[13px] lg:text-[13px] items-center' >
                    <p>Say Hello 👋</p>
                    <img src={telegram} alt="send" className='size-7 md:size-5 lg:size-5 cursor-pointer' onClick={Sent} />
                  </div>
                </div>

                <div className='flex flex-col gap-6 items-center justify-center p-5 border border-gray-700 rounded-[13px]' data-aos="fade-up">
                  <div className='relative flex flex-col items-center'>
                    <img src={sarah} alt="max" />
                    <img src={twitter} alt="twitter" className='size-15 absolute top-55 left-30 md:size-10 lg:size-10 md:top-40 lg:top-40 md:left-21 lg:left-21 cursor-pointer' onClick={Connect} />
                  </div>  
                  <div className='mt-6 flex flex-col items-center'>
                    <h2 className='font-bold text-2xl md:text-[16px] lg:text-[16px]'>Sarah Johnson</h2>
                    <p className='text-[14px] md:text-[13px] lg:text-[13px]'>Chief Real Estate Officer</p>
                  </div>
                  <div className='border rounded-3xl flex justify-between w-[100%] px-5 py-3 md:py-2 lg:py-2 md:text-[13px] lg:text-[13px] items-center' >
                    <p>Say Hello 👋</p>
                    <img src={telegram} alt="send" className='size-7 md:size-5 lg:size-5 cursor-pointer' onClick={Sent} />
                  </div>
                </div>

                <div className='flex flex-col gap-6 items-center justify-center p-5 border border-gray-700 rounded-[13px]' data-aos="fade-up">
                  <div className='relative flex flex-col items-center'>
                    <img src={david} alt="max" />
                    <img src={twitter} alt="twitter" className='size-15 absolute top-55 left-30 md:size-10 lg:size-10 md:top-40 lg:top-40 md:left-21 lg:left-21 cursor-pointer' onClick={Connect} />
                  </div>  
                  <div className='mt-6 flex flex-col items-center'>
                    <h2 className='font-bold text-2xl md:text-[16px] lg:text-[16px]'>David Brown</h2>
                    <p className='text-[14px] md:text-[13px] lg:text-[13px]'>Head of Property Management</p>
                  </div>
                  <div className='border rounded-3xl flex justify-between w-[100%] px-5 py-3 md:py-2 lg:py-2 md:text-[13px] lg:text-[13px] items-center' >
                    <p>Say Hello 👋</p>
                    <img src={telegram} alt="send" className='size-7 md:size-5 lg:size-5 cursor-pointer' onClick={Sent} />
                  </div>
                </div>

                <div className='flex flex-col gap-6 items-center justify-center p-5 border border-gray-700 rounded-[13px]' data-aos="fade-up">
                  <div className='relative flex flex-col items-center'>
                    <img src={micheal} alt="max" />
                    <img src={twitter} alt="twitter" className='size-15 md:size-10 lg:size-10 absolute top-55 left-30 md:top-40 lg:top-40 md:left-21 lg:left-21 cursor-pointer' onClick={Connect} />
                  </div>  
                  <div className='mt-6 flex flex-col items-center'>
                    <h2 className='font-bold text-2xl md:text-[16px] lg:text-[16px]'>Michael Turner</h2>
                    <p className='text-[14px] md:text-[13px] lg:text-[13px]'>Legal Counsel</p>
                  </div>
                  <div className='border rounded-3xl flex justify-between w-[100%] px-5 py-3 md:py-2 lg:py-2 md:text-[13px] lg:text-[13px] items-center' >
                    <p>Say Hello 👋</p>
                    <img src={telegram} alt="send" className='size-7 md:size-5 lg:size-5 cursor-pointer' onClick={Sent} />
                  </div>
                </div>
              </div>
        </section>


        <section className='h-max py-10 bg-gray-950 flex flex-col gap-10 text-white px-4 md:px-17 lg:px-17 '>
            <div className='flex flex-col gap-1 relative'>
                <img src="../assets/Abstract Design star.svg" className='bg-white absolute left-1' alt="" />
                <h2 className='font-bold text-2xl' data-aos="fade-up">Our Valued Clients</h2>
                <p className='text-[13px]' data-aos="fade-up">At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving</p>
            </div>
            <div className='flex flex-col gap-5 md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 md:gap-6 lg:gap-6 '>
              <div className='flex flex-col gap-6 border border-gray-700 rounded-[13px] p-5 md:p-7 lg:p-7'>
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-[12px]'>since 2019</p>
                    <h2 className='font-bold'>ABC Corporation</h2>
                  </div>
                  <button className='px-4 py-2 text-[9px] bg-gray-900 rounded-[9px] cursor-pointer' onClick={Disclose}>Visit Website</button>
                </div>

                <div className='flex'>
                  <div className='border-r border-r-gray-400 pr-6'>
                    <p className='text-[8px] font-extralight'>Domain</p>
                    <h3 className='text-[10px] font-semibold'>Commercial Real Estate</h3>
                  </div>
                  <div className='pl-6'>
                    <p className='text-[8px] font-extralight'>Domain</p>
                    <h3 className='text-[10px] font-semibold'>Commercial Real Estate</h3>
                  </div>
                </div>
          
                <div className='p-4 border rounded-[13px] h-25 md:h-22 lg:h-22 border-gray-800 flex flex-col gap-2'>
                  <p className='text-[8px] font-extralight'>What They Said 🤗</p>
                  <h3 className='text-[10px] font-semibold'>Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.</h3>
                </div>
              </div>


              <div className='flex flex-col gap-6 border border-gray-700 rounded-[13px] p-5 md:p-7 lg:p-7'>
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-[12px]'>since 2018</p>
                    <h2 className='font-bold'>GreenTech Enterprises</h2>
                  </div>
                  <button className='px-4 py-2 text-[9px] bg-gray-900 rounded-[9px] cursor-pointer' onClick={Disclose}>Visit Website</button>
                </div>

                <div className='flex'>
                  <div className='border-r border-r-gray-400 pr-6'>
                    <p className='text-[8px] font-extralight'>Domain</p>
                    <h3 className='text-[10px] font-semibold'>Commercial Real Estate</h3>
                  </div>
                  <div className='pl-6'>
                    <p className='text-[8px] font-extralight'>Domain</p>
                    <h3 className='text-[10px] font-semibold'>Commercial Real Estate</h3>
                  </div>
                </div>
          
                <div className='p-4 border rounded-[13px] h-25 md:h-22 lg:h-22  border-gray-800 flex flex-col gap-2'>
                  <p className='text-[8px] font-extralight'>What They Said 🤗</p>
                  <h3 className='text-[10px] font-semibold'>Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.</h3>
                </div>
              </div>
 
            </div>
        </section>

        <Start />
        <Footer />
    </>
  )
}

export default About