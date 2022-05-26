import React from 'react'

export default function Card({date, imgId, title , des}){
    // const imgAdd = {../images/{imgId}}
    return (
        <div className="mx-2">
            <div className="bg-[#1f2833] rounded-xl overflow-hidden flex flex-col h-60 lg:h-80">
                <img src={process.env.PUBLIC_URL + `/images/${imgId}`} alt="Quiz" className="object-cover h-[40%] lg:h-[50%]" />
                <div className="p-4 h-[40%]">
                    <p className="text-xs">{date}</p>
                    <h4 className="text-xl md:text-2xl my-2">{title}</h4>
                    <a href={des} className="block bg-[#c5c6c7] text-[#0b0c10] text-center font-bold mx-auto my-3 uppercase py-3 px-2 md:px-4 rounded-lg hover:bg-[#66fcf1]">Take Quiz</a>
                </div>
            </div>
        </div>
    )
}
