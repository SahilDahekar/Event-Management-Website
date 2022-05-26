import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import eventMain from "/images/hero-event.png"
import Slider from "react-slick";
import Card from "../components/Card"
import Data from "../components/CardData"
import EventCard from "../components/EventCard"
import TEventCard from "../components/TEventCard"

export default function Events(){

    const cardEl = Data.map(item => 
            <Card 
            date={item.date} 
            key={item.id}
            imgId={item.imgId}
            title={item.title}
            des={item.des}
            />)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
    return(
        <div>
            <Navbar />
            <div className="">
                <div className="relative bg-[#0b0c10]">
                    <img src={process.env.PUBLIC_URL + '/images/hero-event.png'} className="w-full h-[90vh] md:h-[75vh] bg-no-repeat bg-cover object-cover"/>
                    <div className="absolute top-24 left-10 md:top-17 md:left-17 w-42 md:w-auto">
                        <h1 className="text-center text-6xl lg:text-7xl xl:text-8xl pb-2 md:pb-4 text-[#66fcf1] font-thin uppercase tracking-wider">Events</h1>
                        <p className="text-normal text-center border-t border-[#66fcf1] p-0 pt-2 md:pt-4 tracking-wide">Exclusive Events.Priceless Memories</p>
                    </div>
                </div>
                <div className="p-12 pt-2">
                    <div>
                        <h2 className="text-3xl max-w-[1250px] pl-7 mx-auto md:text-4xl xl:text-5xl py-8 text-[#66fcf1] font-thin uppercase tracking-wider">Technical Events	</h2>
                        <div className="max-w-[1250px] mx-auto px-8 py-4">
                          <TEventCard/>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl max-w-[1250px] pl-7 mx-auto md:text-4xl xl:text-5xl py-8 text-[#66fcf1] font-thin uppercase tracking-wider">Non-Technical Events	</h2>
                        <div className="max-w-[1250px] mx-auto px-8 py-4">
                          <EventCard/>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl max-w-[1250px] pl-7 mx-auto md:text-4xl xl:text-5xl py-8 text-[#66fcf1] font-thin uppercase tracking-wider">Quizzicals</h2>
                        <div className="max-w-[1250px] mx-auto px-8 py-4">
                            <Slider {...settings}>
                                {cardEl}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}