import React from "react";

import AOS from "aos"
import "aos/dist/aos.css"

export function styleDiv({items}){
    // const divArray = Array.from({
    //     length:6
    // })

    return(
        <div className='flex flex-col gap-3 md:grid lg:grid md:grid-cols-3 lg:grid-cols-3 md:grid-rows-2 lg:grid-rows-2 md:gap-4 '>
            {items.map(
                (item,index)=>(
                    <div key={index}
                    className='border px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg bg-gradient-to-tr from-purple-500'
                    data-aos="fade-left">
                      <h2 className='text-[17px] font-bold' >{item.p1}</h2>
                      <p className='text-[14px] font-light'>{item.p2}</p>  
                    </div> 
                )
            )}
        </div>
    )
}


                