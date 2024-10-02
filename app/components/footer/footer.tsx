import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import "./footer.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (

<section id="footer">
  <div className="container">
    <div className="logo">
        <Image src="/images/logo/Logo-white.png" alt="Logo" width={144} height={42}/>
        <p>Our dependable, quality maintenance and repair services ensure your electronics receive expert attention, bringing you peace of mind.</p>
    </div>
    <div className="services">
        <span>Services</span>
        <ul>
            <li><a href="#">AC Maintenance</a></li>
            <li><a href="#">Fridge Maintenance</a></li>
            <li><a href="#">Water Leaker Maintenance</a></li>
            <li><a href="#">Many More</a></li>
        </ul>
    </div>
    <div className="quick-link">
        <span>Quick link</span>
        <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact us</a></li>
        </ul>
    </div>
    <div className="contact-details">
        <span>Contact details</span>
        <ul>
            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Building no. 03, Street no-795, Zone no-53, Muaither, Doha, Qatar</li>
            <li><FontAwesomeIcon icon={faPhone} /> +974 66325019</li>
            <li><FontAwesomeIcon icon={faEnvelope} /> superwidmaintenance@gmail.com</li>
        </ul>
    </div>
    <div className="follow-us">
        <span>Follow us on</span>
        <ul>
            <li><a href="#" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="#" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
            <li><a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
        </ul>
    </div>
</div>
<footer>
    <p>&copy; 2024 super wid maintenance - All rights reserved</p>
</footer>
</section>

  )
}

export default Footer;