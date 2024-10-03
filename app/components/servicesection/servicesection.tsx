import React from 'react'
// import Link from 'next/link';
import Image from 'next/image';
import "./servicesection.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServiceSection = () => {
  return (
 
    <section id="service_section">
  <div className="container">

    <h3>Services, we provide</h3>
    <div className="subtitle">
      <div className="text_div">
      <p>Delivering expert, reliable maintenance to keep your electronics running at their best</p>
    </div>
      <div className="button_div mt-[24px]">
        <a className="button" href="#">Services</a>
        <a className="button butto_arrow" href="#"><FontAwesomeIcon icon={faArrowRight} /></a>
    </div>
    </div>


    <div className="service_first">

      <div className="ac">

        <Image className="service_banner_image" src="/images/service/image 428.png" alt="" width={404} height={250} />

        <h4>AC Maintenance & related all services</h4>
        <div>
          <div className="text_div">
          <p>Expert AC maintenance to ensure efficient cooling and extend your system&apos;s lifespan.</p>
        </div>
          <div className="button_div mt-[24px]">
            <a className="button" href="#">Learn more</a>
            <a className="button butto_arrow" href="#"><FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
        </div>
      </div>


      <div className="fridge">

        <Image className="service_banner_image" src="/images/service/image.png" alt="" width={579} height={270}/>

        <h4>Fridge Maintenance & related all services</h4>
        <div>
          <div className="text_div">
          <p>Ensuring your fridge runs efficiently with expert maintenance and timely repairs.</p>
        </div>
          <div className="button_div mt-[24px]">
            <a className="button" href="#">Learn more</a>
            <a className="button butto_arrow" href="#"><FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
        </div>
      </div>


    </div>

    <div className="service_second">

      <div className="ac">

        <Image className="service_banner_image" src="/images/service/image (1).png" alt="" width={579} height={270}/>

        <h4>Water leaking & related all services</h4>
        <div>
          <div className="text_div">
          <p>Quick and effective solutions to stop water leaks and prevent further damage</p>
        </div>
          <div className="button_div mt-[24px]">
            <a className="button" href="#">Learn more</a>
            <a className="button butto_arrow" href="#"><FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
        </div>
      </div>

      <div className="fridge all_serivices">

        <div className="service_group">
          <div>
            <Image src="/images/service/image (2).png" alt="" width={158} height={94} />
          </div>
          <div>
            <Image src="/images/service/image (3).png" alt="" width={158} height={94} />
          </div>
          <div>
            <Image src="/images/service/image (4).png" alt="" width={158} height={94} />
          </div>
          <div>
            <Image src="/images/service/image (5).png" alt="" width={158} height={94} />
          </div>
          <div>
            <Image src="/images/service/image (6).png" alt="" width={158} height={94} />
          </div>
          <div>
            <a className="more_services" href="#">
              +10 more services
            </a>
          </div>
        </div>

        <h4>Services, we provide</h4>
        <div>
          <div className="text_div">
          <p>Delivering expert, reliable maintenance to keep your electronics running at their best</p>
        </div>
          <div className="button_div mt-[24px]">
            <a className="button" href="#">Learn more</a>
            <a className="button butto_arrow" href="#"><FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
        </div>
      </div>

    </div>


  </div>
</section>


  )
}

export default ServiceSection;