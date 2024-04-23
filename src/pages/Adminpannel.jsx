import React, { useState } from "react"
import Lesson2 from "../components/Lesson2"
function Adminpannel(){



    return(
        
        <div className="Container mx-auto ">
            <div className="  bg-gradient-to-r from-red-900 from-10% via-green-900 via-30% to-red-900 to -50% ...h-100px w-100px px-4">
                
<h2 className="text-center  text-2xl text-white">Welcome to K-lugha a platform that provides a solution to literacy of kenyans wide variety of Languages this includes;</h2>
<div>
<ul className="flex justify-around list-none text-white font-bold cursor-pointer">
    <li className="border rounded-full px-2  hover:bg-red-700">My Class</li>
    <li className="border rounded-full px-2  hover:bg-red-700">Add a class</li>
    <li className="border rounded-full px-2  hover:bg-red-700">Welcome,Emmanuel</li>
</ul>
</div>

    <div className="flex flex-wrap gap-4 text-center justify-evenly py-[10rem]">
        
        <div className="text-2xl border  shadow-transparent   w-[200px] h-[200px] bg-white">
    <li className="text-center list-none">Luo </li>
    <button className="border rounded-full hover:bg-red-700  mt-10">resume class</button>
   
    </div>
    <div className="text-2xl border list-none shadow-transparent  w-[200px] h-[200px] bg-white">
    <li className="mt-10">Add Class</li>
        <p>+</p>
    </div>

    </div>
    </div>
    </div>
)
}
export default Adminpannel