import React from "react";
import Laptop from '../assets/laptop.jpg';


const Analytics = () => {
    return <div className=" w-full bg-white py-16 px-4 text-white ">
        <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2   ">
            
            <img className=" w-[500px] mx-auto my-4   " src={Laptop} alt="/" />

            {/* <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' /> */}

            <div className=" flex flex-col justify-center   "> 
            <p className="  text-[#00df9a] font-bold   ">DATA ANALYTICS DASHBOARD</p>
<h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black ">Manage Data Analytics Centrally</h1>
<p className="text-gray-600 md:text-lg">
  Centralisez vos analyses de données pour une meilleure visibilité, des décisions éclairées et une gestion efficace. Optimisez votre stratégie et améliorez les performances de votre entreprise facilement.
</p>

<button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] md:mx-0 '>Get Started</button>
            </div>
        </div>

    </div>
}

export default Analytics