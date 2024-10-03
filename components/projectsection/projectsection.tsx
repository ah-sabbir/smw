import React from 'react'
// import Link from 'next/link';
import Image from 'next/image';
import "./projectsection.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProjectSection = () => {
  return (

    <section id="project_section">
  <div className="container">


    <h3>Our prominent projects</h3>
    <div className="subtitle">
      <div className="text_div">
      <p>Showcasing our key projects that highlight our expertise and commitment to excellence.</p>
    </div>
      <div className="button_div mt-[24px]">
        <a className="button" href="#">See more projects</a>
        <a className="button butto_arrow" href="#"><FontAwesomeIcon icon={faArrowRight} /></a>
    </div>
    </div>



    <div className="project_group">

      <div className="project_one">

        <Image src="/images/project/image (8).png" alt="" width={424} height={424}/>

        <div className="project_content">
          <h4>Air condition maintenance</h4>
          <a href="#">
            LG company, Doha, Qatar</a>
          <p>We provided top-quality AC maintenance for LG company, resulting in high customer satisfaction and reliable system performance.</p>
          <div className="button_div mt-[24px]">
            <a className="button learn_btn" href="#">Learn more</a>
            <a className="button butto_arrow" href="#"><FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
        </div>
      </div>

      <div className="project_two">

        <Image src="/images/project/image 436.png" alt="" width={424} height={424}/>

        <div className="project_content">
          <h4>Water leaker maintenance</h4>
          <a href="#">
            Carrier, Al Wakrah, Qatar</a>
          <p>Expert water heater maintenance resolved leaks, optimized performance, and ensured long-lasting reliability.</p>
          <div className="button_div mt-[24px]">
            <a className="button learn_btn" href="#">Learn more</a>
            <a className="button butto_arrow" href="#"><FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
        </div>
      </div>

      <div className="project_three">
        
        <Image src="/images/project/image (9).png" alt="" width={424} height={424}/>

        <div className="project_content">
          <h4>AC repair</h4>
          <a href="#">
            Daikin, Al Rayyan, Qatar</a>
          <p>Delivered top-notch maintenance for Samsung AC units, enhancing efficiency and extending system life</p>
          <div className="button_div mt-[24px]">
            <a className="button learn_btn" href="#">Learn more</a>
            <a className="button butto_arrow" href="#"><FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
        </div>
      </div>

    </div>


</div>
</section>

  )
}

export default ProjectSection;