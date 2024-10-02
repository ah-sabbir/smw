import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import "./cardsection.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CardSection = () => {
  return (

    <section id="card_section">
  <div className="container">


    <div className="first_div">
    <div className="card business bg-[#F0EDFD;]">
      <div className="sub_member">
        <div className="icon">
          <Image src="/images/icon/Icons (3).png" alt="" width={55} height={55}/>
        </div>
        <h2>20+</h2>
        <p>Years in business</p>
        </div>
    </div>

    <div className="card clients bg-[#FDF6E0]">
      <div className="clients_sub">
        <div className="icon">
            <Image src="/images/icon/Icons (4).png" alt="" width={55} height={55}/>
        </div>
        <h2>150+</h2>
      </div>
        <p>Happy clients</p>
    </div>
  </div>

  <div className="members">
    <div className="card member bg-[#F0FEF1]">
       <div className="sub_member">
        <div className="icon">
          <Image src="/images/icon/Icons (5).png" alt="" width={55} height={55}/>
        </div>
        <h2>50+</h2>
        <p>Team members</p>
       </div>
    </div>
  </div>

    <div className="service_div">
    <div className="card servicccc bg-[#FEF1F1]">
      <div className="sub_member">
        <div className="icon">
          <Image src="/images/icon/Icons (6).png" alt="" width={55} height={55}/>
        </div>
        <h2>15+</h2>
        <p>Service facilities</p>
      </div>
    </div>
    </div>

</div>
</section>

  )
}

export default CardSection;