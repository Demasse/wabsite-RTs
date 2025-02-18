import React from "react";

const Newsletter = () => {
    return <div className=" w-full py-16 text-white    ">

        <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3     ">
            <div className=" lg:col-span-2   ">
                <h1 className=" md:text-5xl sm:text-4xl text-2xl font-bold py-2  ">Want tips & tricks to optimize your flow ?</h1>
                <p> Sign up to our newsletter and stay up to date. </p>

            </div>

            <div className=" my-4 ">
                <div className=" flex flex-col sm:flex-col items-center justify-between w-full  ">
                    <input className=" p-3 flex bg-white w-full  rounded-md text-black " type="email" placeholder=" enter email" />
                    <button className='bg-[#00df9a] w-[200px] rounded-md  font-medium my-6 mx-auto py-3 text-black ml-4 px-6  ' > Notify Me </button>

                </div>

            <p> We care about the protection of your data. read our 

                <span className=" text-[#00df9a]   ">Privacy Policy. </span>
                
                </p>
            </div>

        </div>


    </div>
}

export default Newsletter

// text-[#00df9a]  

{/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button> */ }
