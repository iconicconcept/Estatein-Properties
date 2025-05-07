import Header from '../Components/Header'
import Start from '../Components/Start'
import Footer from '../Components/Footer'
import { useEffect } from 'react'
import search from "../assets/search.svg"
import property1 from "../assets/Property1.png"
import property2 from "../assets/Property2.png"
import property3 from "../assets/Property3.png"

import Aos from 'aos'
import "aos/dist/aos.css"

function Properties() {

  useEffect(()=>{
    Aos.init({
      duration: 1300
    })
  }, [])

  return (
    <>
        <Header />
        <section className= "bg-gradient-to-r from-gray-800 bg-gray-950 h-max md:h-[50vh] lg:h-[50vh] flex flex-col justify-center gap-4 py-15 px-4 md:px-30 lg:px-30 text-white border-b border-b-gray-800">
          <h1 className='font-bold text-2xl' data-aos="fade-up">Find Your Dream Property</h1>
          <p className='text-[13px]' data-aos="fade-up">Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey </p>
        </section >

        <section className='top-85 md:top-94 lg:top-94 z-3 absolute w-[100%] flex justify-center' data-aos="fade-up">
          <div className='bg-gray-900 w-[90%] md:w-[80%] lg:w-[80%] py-3 md:py-2 lg:py-2 text-white flex justify-between px-4 h-max rounded-[12px] relative'>
            <input type="text" placeholder='Search For A Property' className='w-[100%] outline-0' id="propSearch" name='propSearch'/>
            <button className='flex items-center gap-1 px-3 md:px-4 lg:px-4 bg-purple-800 cursor-pointer py-2 md:py-1 lg:p-1 rounded-[12px] absolute right-3 top-[10px] md:top-1 lg:top-1'>
              <img src={search} alt="search" className='size-[12px]' />
              <p className='hidden md:flex lg:flex '>Find Property</p>
            </button>
          </div>
        </section>

        <section className="bg-gray-950 h-max flex flex-col items-center gap-4 pt-10 pb-10 md:pt-10 lg:pt-10  py-3 px-4 text-white relative">
          <div className='bg-gray-900 w-[98%] md:w-[85%] lg:w-[85%] py-2 gap-2 h-max px-3 flex flex-col md:flex-row lg:flex-row md:justify-evenly lg:justify-around rounded-[10px] mt-7 md:mt-5 lg:mt-5'>
            <select name="location" id="location" className='bg-gray-950 p-3 rounded text-[13px]' defaultValue="" data-aos="fade-left">
              <option value="" disabled>Location</option>
              <option value="Abia">Abia</option>
              <option value="Osun">Osun</option>
              <option value="Oyo">Oyo</option>
              <option value="Kano">Kano</option>
            </select>

            <select name="location" id="location" className='bg-gray-950 p-3 rounded text-[13px]' defaultValue="" data-aos="fade-left">
              <option value="" disabled>property type</option>
              <option value="4 bedroom Duplex">4 bedroom Duplex</option>
              <option value="2 bedroom Bungalow">2 bedroom Bungalow</option>
              <option value="5 bedroom Bungalow">5 bedroom Bungalow</option>
              <option value="Others">Others</option>
            </select>

            <select name="location" id="location" className='bg-gray-950 p-3 rounded text-[13px]' defaultValue="" data-aos="fade-left">
              <option value="" disabled>Pricing Range</option>
              <option value="$400 - $600">$400 - $600</option>
              <option value="$1000 - $1500">$1000 - $1500</option>
              <option value="$1500 - $2000">$1500 - $2000</option>
            </select>

            <select name="location" id="location" className='bg-gray-950 p-3 rounded text-[13px]' defaultValue="" data-aos="fade-left">
              <option value="" disabled>property Size</option>
              <option value="4 bedroom Duplex">4 bedroom Duplex</option>
              <option value="2 bedroom Bungalow">2 bedroom Bungalow</option>
              <option value="5 bedroom Bungalow">5 bedroom Bungalow</option>
              <option value="Others">Others</option>
            </select>

            <select name="location" id="location" className='bg-gray-950 p-3 rounded text-[13px]' defaultValue="" data-aos="fade-left">
              <option value="" disabled>Build Year</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
        </section>


        <section className='h-max py-15 bg-gray-950 flex flex-col gap-10 text-white px-4 md:px-30 lg:px-30 '>
          <div className='flex flex-col gap-1 relative'>
              <img src="../assets/star.png" className='absolute left-1' alt="" data-aos="fade-up" />
              <h2 className='font-bold text-2xl' data-aos="fade-up">Discover a World of Possibilities</h2>
              <p className='text-[13px]' data-aos="fade-up">Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home</p>
          </div>
          <div className='flex gap-5 h-max border-b-gray-500 pb-7 border-b-2 overflow-x-scroll md:overflow-x-hidden lg:overflow-x-hidden scrolll' data-aos="fade-right">
          <div className='h-max p-4 bg-gray-950 border flex flex-col gap-7 md:order-3 lg:order-3 rounded-2xl'>
              <img src={property1} alt="property" />
              <div className='flex flex-col gap-7'>
                  <div>
                      <h3 className="text-[20px] font-bold">Metropolitan Haven</h3>
                      <p className='text-[14px]'>An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... <a href='' className='underline'>Read More</a></p>
                  </div>
                  
                  <div className='flex'>
                      <div className='mr-20'>
                          <p className='text-[12px]'>Price</p>
                          <h3 className='font-semibold text-[18px] text-'>$550,000</h3>
                      </div>
                      <button className='py-3 px-4 text-[12px] bg-purple-600 rounded cursor-pointer'>
                          View All Properties
                      </button>
                  </div>
              </div>
          </div>

          <div className='h-max p-4 bg-gray-950 border md:flex lg:flex flex-col md:order-2 lg:order-2 gap-5 rounded-2xl'>
              <img src={property2} alt="property" />
              <div className='flex flex-col gap-7'>
                  <div>
                      <h3 className="text-[20px] font-bold">Seaside Serenity Villa</h3>
                      <p className='text-[14px]'>An elegant 2-bedroom, 2-bathroom townhouse in a gated community... <a href='' className='underline'>Read More</a></p>
                  </div>
    
                  <div className='flex'>
                      <div className='mr-20'>
                          <p className='text-[12px]'>Price</p>
                          <h3 className='font-semibold text-[18px] text-'>$450,000</h3>
                      </div>
                      <button className='py-3 px-8 md:px-4 lg:px-4 text-[12px] bg-purple-600 rounded cursor-pointer'>
                          View All Properties
                      </button>
                  </div>
              </div>
          </div>

          <div className='h-max p-4 bg-gray-950 border md:flex lg:flex md:order-1 lg:order-1 flex-col gap-5 rounded-2xl ' data-aos="fade-left">
              <img src={property3} alt="property" />
              <div className='flex flex-col gap-7'>
                  <div>
                      <h3 className="text-[20px] font-bold">Rustic Retreat Cottage</h3>
                      <p className='text-[14px]'>An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... <a href='' className='underline'>Read More</a></p>
                  </div>
                  
                  <div className='flex'>
                      <div className='mr-20'>
                          <p className='text-[12px]'>Price</p>
                          <h3 className='font-semibold text-[18px] text-'>$550,000</h3>
                      </div>
                      <button className='py-3 px-8 md:px-4 lg:px-4 text-[12px] bg-purple-600 rounded cursor-pointer'>
                          View All Properties
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </section>


    <section className='h-max py-15 bg-gray-950 flex flex-col gap-10 text-white px-4 md:px-30 lg:px-30 '>
          <div className='flex flex-col gap-1 relative'>
              <img src="../assets/star.png" className='absolute left-1' alt="" data-aos="fade-up" />
              <h2 className='font-bold text-2xl' data-aos="fade-up">Let's Make it Happen</h2>
              <p className='text-[13px]' data-aos="fade-up">Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.</p>
          </div>

          <div className='p-4 md:p-10 lg:p-10 flex flex-col gap-5 border border-gray-800 rounded'>
            <div className='flex flex-col gap-4 md:grid lg:grid md:grid-cols-4 lg:grid-cols-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="firstName" className='text-[13px]' data-aos="fade-up">First Name</label>
                <input type="text" id='firstName' name='firstName' data-aos="fade-up" className='border border-gray-700 py-2 px-2 text-[12px] rounded' placeholder='Enter your First Name' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="firstName" className='text-[13px]' data-aos="fade-up">Last Name</label>
                <input type="text" id='firstName' name='firstName' data-aos="fade-up" className='border border-gray-700 py-2 px-2 text-[12px] rounded' placeholder='Enter your Last Name'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="firstName" className='text-[13px]' data-aos="fade-up">Email</label>
                <input type="text" id='firstName' name='firstName' data-aos="fade-up" className='border border-gray-700 py-2 px-2 text-[12px] rounded' placeholder='Enter Email' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="firstName" className='text-[13px]' data-aos="fade-up">Phone Number</label>
                <input type="text" id='firstName' name='firstName' data-aos="fade-up" className='border border-gray-700 py-2 px-2 text-[12px] rounded' placeholder='Enter Phone Number' />
              </div>
            </div>
            
            <div className=' py-0 gap-5 h-max flex flex-col md:grid lg:grid md:grid-cols-4 lg:grid-cols-4 rounded-[10px]'>
              <div className='flex flex-col gap-3'>
                <label htmlFor="lcation" className='text-[13px]' data-aos="fade-up">preferred location</label>
                <select name="location" id="location" className='border border-gray-700 p-2 bg-gray-950 rounded text-[13px]' defaultValue="" data-aos="fade-up">
                  <option value="" disabled>Select Location</option>
                  <option value="Abia">Abia</option>
                  <option value="Osun">Osun</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Kano">Kano</option>
                </select>
              </div>

                <div className='flex flex-col gap-3'>
                  <label htmlFor="lcation" className='text-[13px]' data-aos="fade-up">Property Type</label>
                  <select name="location" id="location" className='border border-gray-700 p-2 bg-gray-950 rounded text-[13px]' defaultValue="" data-aos="fade-up">
                    <option value="" disabled>select property type</option>
                    <option value="4 bedroom Duplex">4 bedroom Duplex</option>
                    <option value="2 bedroom Bungalow">2 bedroom Bungalow</option>
                    <option value="5 bedroom Bungalow">5 bedroom Bungalow</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

              <div className='flex flex-col gap-3'>
                <label htmlFor="lcation" className='text-[13px]' data-aos="fade-up">No. of Bathrooms</label>
                <select name="location" id="location" className='border border-gray-700 p-2 bg-gray-950 rounded text-[13px]' defaultValue="" data-aos="fade-up">
                  <option value="" disabled>Select No. of Bathrooms</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className='flex flex-col gap-3'>
                <label htmlFor="lcation" className='text-[13px] ' data-aos="fade-up">No. of Bedrooms</label>
                <select name="location" id="location" className='border border-gray-700 p-2 bg-gray-950 rounded text-[13px]' defaultValue="" data-aos="fade-up">
                  <option value="" disabled>Select No. of Bedrooms</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
              </div>
            </div>


            <div className='flex flex-col gap-4 md:grid lg:grid md:grid-cols-4 lg:grid-cols-4'>
                <div className='flex flex-col gap-3 md:col-span-2 lg:col-span-2'>
                  <label htmlFor="lcation" className='text-[13px] ' data-aos="fade-up">Budget</label>
                  <select name="location" id="location" className='border border-gray-700 p-2 bg-gray-950 rounded text-[13px]' defaultValue="" data-aos="fade-up">
                    <option value="" disabled >Select Budget</option>
                    <option value="$400 - $600">$400 - $600</option>
                    <option value="$600 - $1000">$600 - $1000</option>
                    <option value="$1000 - $1500">$1000 - $1500</option>
                    <option value="$1500 - $2000">$1500 - $2000</option>
                  </select>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-2 items-center'>
                    <label htmlFor="email" className='text-[13px]' data-aos="fade-up">Preferred Contact Method 1</label> <input type="radio" name="same" id="" className='size-2' data-aos="fade-up"/>
                  </div>
                  <input type="text" id='number' name='number' data-aos="fade-up" className='border border-gray-700 py-2 px-2 text-[12px] rounded' placeholder='Enter Your Number ' />
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-2 items-center'>
                    <label htmlFor="email" className='text-[13px]' data-aos="fade-up">Preferred Contact Method 2</label> <input type="radio" name="same" id="" className='size-2' data-aos="fade-up"/>
                  </div>
                  <input type="text" id='email' name='email' data-aos="fade-up" className='border border-gray-700 py-2 px-2 text-[12px] rounded' placeholder='Enter Your Email' />
                </div>
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor="textArea" className='text-[13px]' data-aos="fade-up">Message</label>
              <textarea name="textArea" id="textArea" className='border rounded-[8px] border-gray-700 min-h-25 max-h-30 p-2' data-aos="fade-up"></textarea>
            </div>

            <div className='mt-5 flex flex-col md:flex-ro lg:flex-row gap-2 md:justify-between lg:justify-between lg:items-center md:items-center'>
              <div className='flex items-center gap-2'>
                <input type="checkbox" name="choose" id="choose" className='size-[10px] cursor-pointer' />
                <p className='text-[12px]'>I agree with <a href="#" className='underline underline-offset-2 cursor-pointer'>Terms of Use</a> and <a href="#" className='underline underline-offset-2 cursor-pointer'>Privacy Policy</a></p>
              </div>
              <button className='text-[12px] w-max px-3 py-2 bg-purple-800 rounded-[7px] cursor-pointer' data-aos="fade-left">Explore Properties</button>
            </div>
          </div>

    </section>

        <Start />
        <Footer />
    </>
  )
}

export default Properties