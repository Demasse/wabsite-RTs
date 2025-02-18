import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setnav] = useState(false)

    const handleNav = () => {
        setnav(!nav)
    }



    return <div className=" h-24 max-w-[1240px] mx-auto  justify-between flex items-center  text-white ">

        <h1 className=" w-full text-3xl font-bold text-[#00df9a]  "> Dann〽️</h1>

        <ul className="  hidden md:flex ">
            <li className="  p-4 "  >Home</li>
            <li className=" p-4 "  >Company</li>
            <li className=" p-4 "  >Resources</li>
            <li className=" p-4  "  >About</li>
            <li className=" p-4 "  >Contact</li>
        </ul>

        <div onClick={handleNav} className="  block md:hidden  " >
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}


        </div>

        <div className= {nav ? ' fixed left-0 h-full top-0 w-[60%]  border-r border-r-gray-900  bg-[#000300] ease-in-out duration-500' :  'fixed left-[-100%]'  } >

            <h1 className=" w-full text-3xl font-bold text-[#00df9a]  "> Dann〽️</h1>


            <ul className=" p-4 uppercase ">
                <li className="  p-4 border-b border-gray-600  "  >Home</li>
                <li className=" p-4 border-b border-gray-600 "  >Company</li>
                <li className=" p-4 border-b border-gray-600 "  >Resources</li>
                <li className=" p-4 border-b border-gray-600  "  >About</li>
                <li className=" p-4 border-b border-gray-600 "  >Contact</li>


            </ul> </div>
    </div>
}

export default Navbar