import React from 'react'
// import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const NavProject = () => {


  return (
    <div>
        <ul className={` dropdown-menu`} >
          {/* ${isHover?"flex":"hidden"} */}
              <li className="text_box">
                  <h3>All projects</h3>
                  <p>Showcasing our key projects that highlight our expertise</p>
                  <div className="button_div">
                      <a className="button" href="#">See all projects</a>
                      <a className="button butto_arrow" href="#"><FontAwesomeIcon icon={faArrowRight} />
                        
                        <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
              </li>
            <li className='service-group'>
              <ul className="service">
                  <li>
                    <a href="#" className="dropdown-item">
                      <Image src="/images/navbar/AC Maintenance.png" alt="" width={48} height={48}/>
                      <div>
                      <h5 className='m-0'>AC Maintenance</h5>
                      <span className='opacit-[.6]'>LG company, Doha, Qatar</span>
                      </div>
                  </a>
                  </li>
                  <ul>
                  <li>
                      <a href="#" className="dropdown-item">
                        <Image src="/images/navbar/Water leaking.png" alt="Water Leaking" width={48} height={48}/>
                        <div>
                          <h5 className="m-0">Water Leaking</h5>
                          <span className="opacity-60">Carrier, Al Wakrah, Qatar</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
                        <Image src="/images/navbar/AC Maintenance.png" alt="Fridge Maintenance" width={48} height={48}/>
                        <div>
                          <h5 className="m-0">AC repair</h5>
                          <span className="opacity-60">Daikin, Al Rayyan, Qatar</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="dropdown-item">
                        <Image src="/images/navbar/AC Installation.png" alt="AC Installation" width={48} height={48}/>
                        <div>
                          <h5 className="m-0">AC Installation</h5>
                          <span className="opacity-60">02 categories</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="dropdown-item">
                        <Image src="/images/navbar/Gas filling service.png" alt="Gas Filling Service" width={48} height={48}/>
                        <div>
                          <h5 className="m-0">Water leaking repair</h5>
                          <span className="opacity-60">Panasonic, Dukhan, Qatar</span>
                        </div>
                      </a>
                    </li>

                   
                  </ul>
              </ul>
            </li>
            <li>
              <ul>
              <li>
                  <a href="#" className="dropdown-item">
                    <Image src="/images/navbar/Custom service .png" alt="Custom Service" width={48} height={48}/>
                    <div>
                      <h5 className="m-0">Gas Filling Service</h5>
                      <span className="opacity-60">Mitsubishi, Madinat ash Shamal, Qatar</span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
    </div>
  )
}

export default NavProject;