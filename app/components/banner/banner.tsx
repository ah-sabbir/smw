import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import "./banner.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <div className="container banner">
    <div className="text">
        <h1>Your <span className="text-[#0fbbf0]">Trusted</span> Partner in Electronics <span className="text-[#0fbbf0]">Maintenance</span></h1>
        <p>With expert care and proven reliability, we provide trusted maintenance and repair for all your electronics, giving you peace of mind</p>
        <div className="button_div mt-[24px]">
            <a className="button" href="#">Contact us</a>
            <a className="button butto_arrow" href="#"><i className="fa-solid fa-arrow-right"></i><FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
        <div className="icon_box flex gap-[14px] mt-[32px]">
            <div className="icon flex items-center justify-center">
                <Image src="/images/banner/expert.png" alt="" width={28} height={28}/>
                <p>Expert workers</p>
            </div>
            <div className="icon flex items-center justify-center">
                <Image src="/images/banner/quality.png" alt="" width={28} height={28}/>
                <p>Quality services</p>
            </div>
            <div className="icon flex items-center justify-center">
                <Image src="/images/banner/100.png" alt="" width={28} height={28}/>
                <p>100% Guarantee work</p>
            </div>
        </div>
    </div>
    <div className="image">
        <Image src="/images/banner/banner.png" alt="" width={1000} height={430}/>
    </div>
</div>
  )
}

export default Banner;