import React from "react"
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import videoBg from "../assets/mainBg.mp4"
export default function Home(){
    return(
        <div className="h-screen overflow-y-hidden">
            <Navbar />
            <div className="relative bg-[#0b0c10] h-[87vh]">
                <div className="absolute bg-[rgba(0,0,0,0.6)]"></div>
                <video src={videoBg} className="w-full h-full object-cover" autoPlay loop muted/>
                {/* <img src={process.env.PUBLIC_URL + '/images/home -img.jpg'} alt="landing img" className="w-full bg-no-repeat bg-cover h-[80%]"/> */}
                <div className="absolute top-1/4 left-1/4 md:left-1/3">
                    <h1 className="text-center text-4xl md:text-6xl lg:text-7xl xl:text-7xl pb-2 md:pb-4 text-[#66fcf1] font-thin uppercase tracking-wider ">Events<br/> Management</h1>
                    <p className="text-lg md:text-normal md:text-center border-t border-[#66fcf1] p-0 pt-2 tracking-wide">Manage all Events at One Place</p>
                    <div className="flex items-center"><a href="/events" className="bg-[#c5c6c7] text-[#0b0c10] font-bold mx-auto my-4 uppercase py-3 px-8 sm:px-16 rounded-lg hover:bg-[#66fcf1]">GO TO Events..</a></div>
                </div>
            </div>
        </div>
    )
}