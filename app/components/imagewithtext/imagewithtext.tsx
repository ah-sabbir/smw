import React from 'react'
// import Link from 'next/link';
import Image from 'next/image';
import "./imagewithtext.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ImageWithText = () => {
  return (

    <section id="image_with_text">
    <div className="container">
      <div className="image">
        <Image className="left_image" src="/images/service/image (7).png" alt="" width={860} height={470}/>
      </div>
      <div className="text_box">
        <h3>Behind the Service</h3>
        <p>With expert care and a commitment to excellence, we deliver precise maintenance for your ACs, fridges, and electronics. Trust us to keep your devices running smoothly</p>
  
        <div className="service_point">
          <div>
            <Image src="/images/icon/Icons.png" alt="" height={22} width={22} />
          </div>
            <div className="point">
              <h4>Maintenance</h4>
              <p>Expert maintenance for ACs, fridges, and electronics, ensuring smooth and reliable performance.</p>
            </div>
        </div>
  
        <div className="service_point">
          <div>
            <Image src="/images/icon/Icons (1).png" alt="" height={22} width={22} />
          </div>
            <div className="point">
              <h4>Support</h4>
              <p>Expert support for all your electronics, ensuring seamless performance and quick solutions.</p>
            </div>
        </div>
  
        <div className="service_point">
          <div>
            <Image src="/images/icon/Icons (2).png" alt="" height={22} width={22} />
          </div>
            <div className="point">
              <h4>Work quality</h4>
              <p>Top-notch maintenance for reliable, long-lasting electronics performance.</p>
            </div>
        </div>
  
        <div className="button_div mt-[24px]">
          <a className="button" href="#">Services</a>
          <a className="button butto_arrow" href="#"><FontAwesomeIcon icon={faArrowRight} /></a>
      </div>
  
      </div>
    </div>
  </section>

  )
}

export default ImageWithText;