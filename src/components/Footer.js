import React from 'react'
import {GrInstagram} from "react-icons/gr"
import {GrFacebook} from "react-icons/gr"
import {GrTwitter} from "react-icons/gr"
function Footer() {
  return (
    <div className="pt-4 w-full border-t border-[#1F2833]">
        <div className="flex w-fit mx-auto">
            <a href="" target="_blank" className="px-3 text-xl hover:text-[#66FCF1] hover:transition-transform hover:scale-110"><GrInstagram/></a>
            <a href="" target="_blank" className="px-3 text-xl hover:text-[#66FCF1] hover:transition-transform hover:scale-110"><GrFacebook/></a>
            <a href="" target="_blank" className="px-3 text-xl hover:text-[#66FCF1] hover:transition-transform hover:scale-110"><GrTwitter/></a>
        </div>
        <div className="mx-auto w-fit my-2">
            <p className="text-xs">@2022 S2 PBL Group 1. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer