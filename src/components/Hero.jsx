import React from "react";
// import  Typed  from "react-typed";
import { ReactTyped } from "react-typed";


const Hero = () => {
    return <div className=" text-white">


        <div className=" max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center  flex flex-col  ">

            <p className=" uppercase  text-[#00df9a] font-bold p-2   ">growing with data analytics</p>
            <h1 className=" md:text-7xl sm:text-6xl text-4xl font-bold md:py-6  "> Grow with data.</h1>

            <div >
                <p className=" md:text-5xl sm:text-4xl text-xl font-bold  ">Fast, flexible financing for

                </p>

                <ReactTyped
                 className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                    strings={[
                        'BTB',
                        'BTC',
                        'SASS'
                    ]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>

        </div> */}

    </div>
}

export default Hero
