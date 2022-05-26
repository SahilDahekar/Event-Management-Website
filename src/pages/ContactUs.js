import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
export default function ContactUs(){
    return(
            <>
                <Navbar />
                {/* Main Content Section */}
                <div className="flex flex-col sm:flex-row mx-auto max-w-[1240px]">
                    <div className="mt-4 sm:w-1/3 border-b border-[#1f2833]">
                        <div className="bg-[#0b0c10] h-full p-8 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
                            <div className="bg-[#0b0c10] text-[#66fcf1] text-5xl w-16 rounded-full p-2">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.832 2.688A4.056 4.056 0 0 0 8.02 1.5h-.04a4.056 4.056 0 0 0-4 4c-.013.75.198 1.487.606 2.117L7.734 14h.533l3.147-6.383c.409-.63.62-1.367.606-2.117a4.056 4.056 0 0 0-1.188-2.812zM7.925 2.5l.082.01.074-.01a3.075 3.075 0 0 1 2.941 3.037 2.74 2.74 0 0 1-.467 1.568l-.02.034-.017.035L8 12.279l-2.517-5.1-.017-.039-.02-.034a2.74 2.74 0 0 1-.467-1.568A3.074 3.074 0 0 1 7.924 2.5zm.612 2.169a1 1 0 1 0-1.112 1.663 1 1 0 0 0 1.112-1.663zM6.87 3.837a2 2 0 1 1 2.22 3.326 2 2 0 0 1-2.22-3.326z"></path></svg>
                            </div>
                            <div className="mt-4 font-thin text-[#66fcf1] text-3xl mb-4 tracking-wide uppercase"><a href="https://goo.gl/maps/vZ1DBy7iJZjybDnT7" target="_blank">Address</a></div>
                            <div className="text-center mt-2 text-[#c6c5c7] text-sm lg:px-8">44, Shiv Darshan Rd, Parvati, विद्या नगरी, Vidya Nagari, Parvati Paytha, Pune, Maharashtra 411009</div>
                        </div>
                    </div>
                    
                    <div className="mt-4 sm:w-1/3 border-b border-[#1f2833]">
                        <div className="bg-[#0b0c10] h-full p-8 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
                            <div className="bg-[#0b0c10] text-[#66fcf1] text-5xl w-16 rounded-full p-2">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M436.9 364.8c-14.7-14.7-50-36.8-67.4-45.1-20.2-9.7-27.6-9.5-41.9.8-11.9 8.6-19.6 16.6-33.3 13.6-13.7-2.9-40.7-23.4-66.9-49.5-26.2-26.2-46.6-53.2-49.5-66.9-2.9-13.8 5.1-21.4 13.6-33.3 10.3-14.3 10.6-21.7.8-41.9C184 125 162 89.8 147.2 75.1c-14.7-14.7-18-11.5-26.1-8.6 0 0-12 4.8-23.9 12.7-14.7 9.8-22.9 18-28.7 30.3-5.7 12.3-12.3 35.2 21.3 95 27.1 48.3 53.7 84.9 93.2 124.3l.1.1.1.1c39.5 39.5 76 66.1 124.3 93.2 59.8 33.6 82.7 27 95 21.3 12.3-5.7 20.5-13.9 30.3-28.7 7.9-11.9 12.7-23.9 12.7-23.9 2.9-8.1 6.2-11.4-8.6-26.1z"></path></svg>
                            </div>
                            <div className="mt-4 font-thin text-[#66fcf1] text-3xl mb-4 tracking-wide uppercase">Phone</div>
                            <div className="text-center mt-2 text-[#c6c5c7] text-sm">FAX: +91 020 24226858<br />
                            TELEPHONE: +91 020 24228258 / 65 / 79</div>
                        </div>
                    </div>
                    
                    <div className="mt-4 sm:w-1/3 border-b border-[#1f2833]">
                        <div className="bg-[#0b0c10] h-full p-8 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
                            <div className="bg-[#0b0c10] text-5xl text-[#66fcf1] w-16 rounded-full p-2">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>   
                            </div>
                            <div className="mt-4 font-thin text-[#66fcf1] text-3xl mb-4 tracking-wide uppercase">Email</div>
                            <div className="text-center mt-2 text-[#c6c5c7] text-sm">enquiry@pvgcoet.ac.in<br/> info@pvgcoet.ac.in</div>
                        </div>
                    </div>
                </div>
                {/* Main Content Section Ends */}
                {/* Message form section */}
                <div className="max-w-[1240px] sm:w-50% mx-auto my-10 px-10 md:px-8 xl:px-0">
                    <h1 className="text-5xl text-[#66fcf1] font-thin uppercase tracking-wider">Message Us</h1>
                    <div className="mt-8 flex flex-col sm:flex-row">
                        <div className="flex flex-col max-w-sm sm:mr-6 sm:basis-3/5">
                            <input className="text-white my-4 px-3 py-3 rounded-lg bg-[#1f2833] placeholder:uppercase" type="text" placeholder="First Name"/>
                            <input className="text-white my-4 px-3 py-3 rounded-lg bg-[#1f2833] placeholder:uppercase" type="text" placeholder="Last Name"/>
                            <input className="text-white my-4 px-3 py-3 rounded-lg bg-[#1f2833] placeholder:uppercase" type="text" placeholder="Email"/>
                        </div>
                        <div className="flex flex-col max-w-sm sm:basis-2/5">
                            <textarea className="my-4 px-3 py-3 rounded-lg bg-[#1f2833] placeholder:uppercase sm:basis-2/3 sm:py-4" type="text" placeholder="Comments" />
                            <div className="">
                                <button type="button" className=" bg-[#c5c6c7] w-50% text-[#0b0c10] items-center font-bold my-4 uppercase py-3 px-16 sm:px-8 rounded-lg hover:bg-[#66fcf1] sm:basis-1/3">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Message form section Ends */}
                <Footer/>
            </>
    )
}

