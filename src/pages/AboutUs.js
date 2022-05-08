import React from "react"
import Navbar from "../components/Navbar"
export default function AboutUs(){
    return(
        <>
            <Navbar />
            
            <div className="flex flex-col items-center max-w-[1240px] mx-auto px-10 pb-16 pt-16">
                <h1 className="text-6xl text-[#66fcf1] font-thin uppercase pb-4 md:text-7xl xl:text-8xl tracking-wider">About Us</h1>
                <p className="border-t border-[#66fcf1] px-20 pt-4 text-lg">Established in 1985</p>
            </div>
            <div className="bg-[#c5c6c7] ">
                <div className=" text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    <p className="text-lg">
                        Pune Vidhyarthi Griha's College of Engineering and Technology is an engineering college affiliated with the University of Pune, located in Maharashtra, India.
                        It was established in 1985 and is situated in Pune. 
                        The college is approved by the All India Council for Technical Education and by the government of Maharashtra.
                    </p><br/>
                    <p className="text-lg">
                        Established in 1985, Pune Vidhyarthi Griha’s College of Engineering and Technology,     an affiliate to the Savitribai Phule Pune University and accredited ‘A’ by NAAC is  one of the reputed engineering colleges in India. College provides courses on    Engineering disciplines and offers some of the most advanced platform and  infrastructure to its students.
                    </p><br/>
                    <p className="text-lg">
                        Vidhyarthi Griha was established in 1909, by the group of dedicated and visionary   social workers, primary aim being to provide education facilities to deserving    students and facility deprived students. PVG’s College of Engineering and Technology   and G. K. Pate (Wani) Institute of Management was established as an unaided college   in 1985 under the parent Institute PVG
                    </p>
                </div>
            </div>
        </>
    )
}