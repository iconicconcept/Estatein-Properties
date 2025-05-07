import Header from '../Components/Header'
import "../index.css"
import homeBuilding from "../assets/Container.png"
import block1 from "../assets/block1.png"
import block2 from "../assets/block 2.png"
import block3 from "../assets/block 3.png"
import block4 from "../assets/block 4.png"
import arrowBlock from "../assets/arrow-block.png"
import property1 from "../assets/Property1.png"
import bedIcon from "../assets/bed Icon.png"
import closetIcon from "../assets/closet icon.png"
import villaIcon from "../assets/villa Icon.png"
import property2 from "../assets/Property2.png"
import property3 from "../assets/Property3.png"
import john from "../assets/mans.svg"
import emilie from "../assets/emilie.svg"
import waden from "../assets/wade.svg"
import container from "../assets/Sub Container.svg"
import Footer from '../Components/Footer'
import Start from '../Components/Start'

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

function Home() {
    useEffect(()=>{
        AOS.init({
            duration: 1300
        });
    }, [])

  return (
    <>
    <Header />
    <section className="bg-gray-950 h-max md:h-[95vh] lg:h-[95vh] flex flex-col md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 lg:flex-row-reverse relative overflow-y-hidden">
        <div className='order-1 md:order-2 lg:order2'>
            <img src={container} alt="" className='absolute size-18 top-73 md:right-148 md:left-auto lg:right-148 lg:left-auto left-3' />
            <img src={homeBuilding} alt="building" className='pop rounded lg:rounded-none px-4 md:px-0 lg:px-0 py-3 md:py-0 lg:py-0' />
        </div>
        <div className='bg-gray-950 h-max md:h-[100%] lg:h-[100%] py-5 pt-10 px-5 md:pl-30 lg:pl-30 text-white flex flex-col gap-5 md:gap-8 lg:gap-8 order-2 md:order-1 lg:order1 md:flex justify-center' data-aos="fade-up">
            <h1 className=' font-semibold text-[24px] md:text-[30px]' data-aos="fade-up">Discover Your Dream Property with Estatein</h1>
            <p data-aos="fade-up">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
            <div className=' flex flex-col md:flex-row lg:flex-row gap-3' data-aos="fade-up">
                <button className='cursor-pointer px-2 md:px-5 lg:px-5 py-3 border rounded border-gray-400'>Learn More</button>
                <button className='cursor-pointer px-2 py-3 rounded bg-purple-700'>Browse Properties</button>
            </div>
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

        <div className=' bg-gray-950 text-white service rounded md:rounded-none lg:rounded-none py-3 border-6 border-[#161621] px-3 gap-2 grid grid-cols-2 grid-rows-2 md:grid-cols-4 lg:grid-cols-4 md:grid-rows-none lg:grid-rows-none'>
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

        <section className='h-max py-15 bg-gray-950 flex flex-col gap-10 text-white px-4 md:px-30 lg:px-30 '>
            <div className='flex gap-12'>
                <div className='flex flex-col gap-1 relative'>
                    <img src="../assets/star.png" className='absolute left-1' alt="" data-aos="fade-up" />
                    <h2 className='font-bold text-2xl' data-aos="fade-up">Featured Properties</h2>
                    <p className='text-[13px]' data-aos="fade-up">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "<span className='underline underline-offset-4'>View Details</span>" for more information.</p>
                </div>
                <div className='hidden md:flex lg:flex items-end'>
                    <button className='cursor-pointer px-2 py-3 rounded bg-gray-800 text-[14px] w-max' data-aos="fade-left">Explore Properties</button>
                </div>
            </div>
            <div className='flex gap-5 h-max border-b-gray-500 pb-7 border-b-2 overflow-x-scroll md:overflow-x-hidden lg:overflow-x-hidden scrolll' data-aos="fade-right">
                <div className='h-max p-4 bg-gray-950 border flex flex-col gap-5 md:order-3 lg:order-3 rounded-2xl'>
                    <img src={property1} alt="property" />
                    <div className='flex flex-col gap-4'>
                        <div>
                            <h3 className="text-[20px] font-bold">Metropolitan Haven</h3>
                            <p className='text-[14px]'>An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... <a href='' className='underline'>Read More</a></p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <div className='bg-[#161621] rounded-2xl p-3 w-[max-content] flex items-center gap-3'><img src={bedIcon} alt="icon" className='size-5' /> <p >4-Bedroom</p></div>
                                <div className='bg-[#161621] rounded-2xl p-3 w-[max-content] flex items-center gap-3'><img src={closetIcon} alt="icon" className='size-5' /> <p >3-Bedroom</p></div>
                            </div>
                            <div className='bg-[#161621] rounded-2xl p-3 w-[max-content] flex items-center gap-3'><img src={villaIcon} alt="icon" className='size-5' /> <p >Villa </p></div>
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
                    <div className='flex flex-col gap-4'>
                        <div>
                            <h3 className="text-[20px] font-bold">Seaside Serenity Villa</h3>
                            <p className='text-[14px]'>An elegant 2-bedroom, 2-bathroom townhouse in a gated community... <a href='' className='underline'>Read More</a></p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <div className='bg-[#161621] rounded-2xl p-3 w-[max-content] flex items-center gap-3'><img src={bedIcon} alt="icon" className='size-5' /> <p >2-Bedroom</p></div>
                                <div className='bg-[#161621] rounded-2xl p-3 w-[max-content] flex items-center gap-3'><img src={closetIcon} alt="icon" className='size-5' /> <p >2-Bedroom</p></div>
                            </div>
                            <div className='bg-[#161621] rounded-2xl p-3 w-[max-content] flex items-center gap-3'><img src={villaIcon} alt="icon" className='size-5' /> <p >Villa </p></div>
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
                    <div className='flex flex-col gap-4'>
                        <div>
                            <h3 className="text-[20px] font-bold">Rustic Retreat Cottage</h3>
                            <p className='text-[14px]'>An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... <a href='' className='underline'>Read More</a></p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <div className='bg-[#161621] rounded-2xl p-3 w-[max-content] flex items-center gap-3'><img src={bedIcon} alt="icon" className='size-5' /> <p >4-Bedroom</p></div>
                                <div className='bg-[#161621] rounded-2xl p-3 w-[max-content] flex items-center gap-3'><img src={closetIcon} alt="icon" className='size-5' /> <p >3-Bedroom</p></div>
                            </div>
                            <div className='bg-[#161621] rounded-2xl p-3 w-[max-content] flex items-center gap-3'><img src={villaIcon} alt="icon" className='size-5' /> <p >Villa </p></div>
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



        <section className='h-max pt-2 pb-15 bg-gray-950 flex flex-col gap-10 text-white px-4 md:px-30 lg:px-30 '>
            <div className='flex gap-12'>
                <div className='flex flex-col gap-1 relative'>
                    {/* <img src="../assets/star.png" className='absolute left-1' alt="" /> */}
                    <h2 className='font-bold text-2xl' data-aos="fade-up">What Our Clients Say</h2>
                    <p className='text-[13px]' data-aos="fade-right">Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
                </div>
                <div className='hidden md:flex lg:flex items-end' data-aos="fade-right">
                    <button className='cursor-pointer px-2 py-3 rounded bg-gray-800 text-[14px] w-max'>View All Properties</button>
                </div>
            </div>
            <div className='md:grid lg:grid flex flex-col md:grid-cols-3 lg:grid-cols-3 grid-cols-3 gap-5 h-max pb-7 border-gray-500 border-b-2'>
                <div className='md:h-[230px] lg:h-[230px] h-max p-4 bg-gray-950 border flex flex-col gap-5 md:order-3 lg:order-3 rounded-2xl'>
                    <div className='flex flex-col gap-3' data-aos="fade-left">
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-[20px] font-bold" data-aos="fade-up">Trusted Advisors</h3>
                            <p className='text-[14px]' data-aos="fade-up">The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!</p>
                        </div>
                        <div className='flex gap-1'>
                            <img src={waden} className='float-left mr-3 size-10' alt="John Mans" />
                            <div>
                                <h1 className='text-[14px] font-semibold'>John Mans</h1>
                                <p className='text-[10px] font-light'>USA, Nevada</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:h-[230px] lg:h-[230px] h-max p-4 bg-gray-950 border md:flex lg:flex flex-col md:order-2 lg:order-2 gap-5 rounded-2xl'>
                    <div className='flex flex-col justify-between gap-7' data-aos="fade-up">
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-[20px] font-bold" data-aos="fade-up">Efficient and Reliable</h3>
                            <p className='text-[12px]' data-aos="fade-up">Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.</p>
                        </div>
                        <div className='flex gap-1'>
                            <img src={emilie} className='float-left mr-3 size-10' alt="John Mans" />
                            <div>
                                <h1 className='text-[14px] font-semibold'>Emelie Thomson</h1>
                                <p className='text-[10px] font-light'>USA, Florida</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:h-[230px] lg:h-[230px] h-max p-4 bg-gray-950 border md:flex lg:flex md:order-1 lg:order-1 flex-col gap-5 rounded-2xl border-'>
                    <div className='flex flex-col justify-between gap-4' data-aos="fade-right">
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-[20px] font-bold">Exceptional Service!</h3>
                            <p className='text-[14px]'>Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!</p>
                        </div>
                        <div className='flex gap-1'>
                            <img src={john} className='float-left mr-3 size-10' alt="John Mans" />
                            <div className='' data-aos="fade-left">
                                <h1 className='text-[14px] font-semibold'>Wade Warren</h1>
                                <p className='text-[10px] font-light'>USA, California</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className='h-max pt-3 pb-6 bg-gray-950 flex flex-col gap-10 text-white px-4 md:px-30 lg:px-30 '>
            <div className=''>
                <div className='flex flex-col gap-1 relative'>
                    <img src="../assets/star.png" className='absolute left-1' alt="" />
                    <h2 className='font-bold text-2xl' data-aos="fade-up">Frequently Asked Questions</h2>
                    <p className='text-[13px]' data-aos="fade-up">Discover the different ways you can get in touch with our experienced agents.</p>
                </div>
            </div>
            <div className='md:grid lg:grid flex flex-col md:grid-cols-3 lg:grid-cols-3 grid-cols-3 gap-5 h-max pb-10 border-b-[#161621] border-b-2'>
                <div className='h-max p-4 bg-gray-950 border flex flex-col gap-5 md:order-3 lg:order-3 rounded-2xl'>
                    <div className='flex flex-col gap-3 pb-3' data-aos="fade-right">
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-[17px] font-bold">How can I contact an Estatein agent?</h3>
                            <p className='text-[14px]'>Discover the different ways you can get in touch with our experienced agents.</p>
                        </div>
                        <div className='mt-2'>
                           <button className='px-6 py-2 rounded bg-gray-900 text-[14px] cursor-pointer'>Read More</button> 
                        </div>
                    </div>
                </div>

                <div className='h-max p-4 bg-gray-950 border md:flex lg:flex flex-col md:order-2 lg:order-2 gap-5 rounded-2xl'>
                    <div className='flex flex-col justify-between gap-7' data-aos="fade-up">
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-[17px] font-bold">What documents do I need to sell my property through Estatein?</h3>
                            <p className='text-[12px]'>Find out about the necessary documentation for listing your property with us.</p>
                        </div>
                        <div className='mt-2'>
                           <button className='px-6 py-2 rounded bg-gray-900 text-[14px] cursor-pointer'>Read More</button> 
                        </div>
                    </div>
                </div>

                <div className='h-max p-4 bg-gray-950 border md:flex lg:flex md:order-1 lg:order-1 flex-col gap-5 rounded-2xl border-'>
                    <div className='flex flex-col justify-between gap-4 pb-1' data-aos="fade-left">
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-[17px] font-bold">How do I search for properties on Estatein?</h3>
                            <p className='text-[14px]'>Learn how to use our user-friendly search tools to find properties that match your criteria.</p>
                        </div>
                        <div className='mt-2'>
                           <button className='px-6 py-2 rounded bg-gray-900 text-[14px] cursor-pointer'>Read More</button> 
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Start />
        <Footer />

    </>
  )
}

export default Home