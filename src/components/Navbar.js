import React,{useState} from "react"
import {Link} from "react-router-dom"
export default function Navbar(props){
    const [nav, setNav] = useState(false)

    function handleNav(){
        setNav(!nav)
    }
    return(
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <h1 className="text-[#66FCF1] font-bold text-3xl w-full">PVGCOET.</h1>
            <ul className="hidden md:flex">
                <Link to="/"><li className="p-4 uppercase ">Home</li></Link>
                <Link to="/events"><li className="p-4 uppercase ">Events</li></Link>
                <Link to="/aboutUs"><li className="p-4 uppercase ">About</li></Link>
                <Link to="/contactUs"><li className="p-4 uppercase ">Contact</li></Link>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
            {!nav ? <svg size={30} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg> : <svg size={30} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>}
            </div>
            <div className={!nav ? "fixed left-0 top-0 z-10 w-[60%] border-r-gray-900 h-full bg-[#1f2833] ease-in-out duration-500 md:left-[-100%]" : "fixed left-[-100%]"}>
                <h1 className="text-[#66FCF1] font-bold text-3xl w-full m-4">EVENT OP.</h1>
                <ul className="p-4 uppercase">
                    <Link to="/"><li className="p-4 uppercase font-bold border-b border-gray-700">Home</li></Link>
                    <Link to="/events"><li className="p-4 uppercase font-bold border-b border-gray-700">Events</li></Link>
                    <Link to="/aboutUs"><li className="p-4 uppercase font-bold border-b border-gray-700">About</li></Link>
                    <Link to="/contactUs"><li className="p-4 uppercase font-bold ">Contact</li></Link>
                </ul>
            </div>
            
        </div>
    )
}