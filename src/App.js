import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Events from "./pages/Events"
import Quiz1 from "./pages/Quiz1"
import Quiz2 from "./pages/Quiz2"
import Quiz3 from "./pages/Quiz3"
import Quiz4 from "./pages/Quiz4"
import Quiz5 from "./pages/Quiz5"
import Quiz6 from "./pages/Quiz6"
import Quiz7 from "./pages/Quiz7"
import Quiz8 from "./pages/Quiz8"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Register from "./pages/Register"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App(){
    return(
       <div>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/one" element={<Quiz1/>}/>
            <Route path="/two" element={<Quiz2/>}/>
            <Route path="/three" element={<Quiz3/>}/>
            <Route path="/four" element={<Quiz4/>}/>
            <Route path="/five" element={<Quiz5/>}/>
            <Route path="/six" element={<Quiz6/>}/>
            <Route path="/seven" element={<Quiz7/>}/>
            <Route path="/eight" element={<Quiz8/>}/>
            <Route path="/register" element={<Register />} /> 
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        
       </div>
       
    )
}