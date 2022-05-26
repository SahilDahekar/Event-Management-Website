import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"

export default function Navbar(props) {
    const [nav, setNav] = useState(false)
    let activeStyle = {
        color: "#66fcf1",
    };
    function handleNav() {
        setNav(!nav)
    }
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <h1 className="text-[#66FCF1] font-bold text-3xl w-full"><a href="/">PVGCOET.</a></h1>
            <ul className="hidden md:flex">
                <li className="p-4 uppercase hover:text-[#66fcf1]"><NavLink end to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink></li>
                <li className="p-4 uppercase hover:text-[#66fcf1]"><NavLink to="/events" style={({ isActive }) => isActive ? activeStyle : undefined}>Events</NavLink></li>
                <li className="p-4 uppercase hover:text-[#66fcf1]"><NavLink to="/aboutUs" style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink></li>
                <li className="p-4 uppercase hover:text-[#66fcf1]"><NavLink to="/contactUs" style={({ isActive }) => isActive ? activeStyle : undefined}>Contact</NavLink></li>
                <li className="p-2 whitespace-nowrap"><button className="py-2 px-4 bg-[#c6c5c7] font-bold uppercase text-[#1f2833] rounded-md hover:bg-[#66fcf1]" type="button" data-modal-toggle="authentication-modal">Log In</button></li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
            </div>
            <div className={!nav ? "fixed left-[-100%]" : "fixed left-0 top-0 z-10 w-[60%] border-r-gray-900 h-full bg-[#1f2833] ease-in-out duration-500 md:left-[-100%]"}>
                <h1 className="text-[#66FCF1] font-bold text-3xl w-full m-4"><a href="/">PVGCOET.</a></h1>
                <ul className="p-4 uppercase">
                    <li className="p-4 uppercase font-bold border-b border-gray-700 hover:text-[#66fcf1]"><NavLink end to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink></li>
                    <li className="p-4 uppercase font-bold border-b border-gray-700 hover:text-[#66fcf1]"><NavLink to="/events" style={({ isActive }) => isActive ? activeStyle : undefined}>Events</NavLink></li>
                    <li className="p-4 uppercase font-bold border-b border-gray-700 hover:text-[#66fcf1]"><NavLink to="/aboutUs" style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink></li>
                    <li className="p-4 uppercase font-bold border-b border-gray-700 hover:text-[#66fcf1]"><NavLink to="/contactUs" style={({ isActive }) => isActive ? activeStyle : undefined}>Contact</NavLink></li>
                    <li className="p-2 whitespace-nowrap"><button className="py-2 px-4 bg-[#c6c5c7] text-[#1f2833] uppercase font-bold rounded-md hover:bg-[#66fcf1]" type="button" data-modal-toggle="authentication-modal">Log In</button></li>
                </ul>
            </div>
            {/*modal start */}

            <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
                <div class="relative p-4 w-full max-w-md h-full md:h-auto">

                    <div class="relative bg-[#1f2833] rounded-lg shadow dark:bg-gray-700">
                        <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-900 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="authentication-modal">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div class="py-6 px-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-white">Sign in to our platform</h3>
                            <form class="space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-[#c6c5c7]">Your email</label>
                                    <input type="email" name="email" id="email" class="border text-sm rounded-lg focus:ring-[#52ccc4] focus:border-[#52ccc4] block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="crn@pvgcoet.ac.in" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium  text-gray-300">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class=" border text-sm rounded-lg focus:ring-[#52ccc4] focus:border-[#52ccc4] block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" required="" />
                                </div>
                                {/* <div class="flex justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                    </div>
                                    <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                                </div> */}
                                <button type="submit" class="w-full text-[#0b0c10] bg-[#66fcf1] hover:bg-[#52ccc4] focus:ring-4 focus:outline-none focus:ring-[#52ccc4] font-bold rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                                <div class="text-sm font-medium text-gray-300 ">
                                    Not registered? <a href="/register" class="text-[#52ccc4] hover:underline">Create account</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/*modal end */}
        </div>
    )
}