'use client'
import React, { useState } from 'react';
import './navbar.css';
import Link from 'next/link';
import Image from 'next/image';

import logoBlack from '@/public/images/logo/Logo-black.png';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="m-0 h-[95px] w-full z-[99999999999] bg-white navbar-expand-lg">
      <div className="w-full max-w-[1320px] mx-auto px-4">

        {/* <!-- Logo --> */}
        <div className="logo max-w-40 m-5">
          <Link className="navbar-brand" href="#">
            {/* <div className={`w-8 h-8 bg-cover bg-center bg-logo-brand-black`}></div> */}
            <Image src={logoBlack} alt='logo' className='w-full h-auto' quality={100}/>
          </Link>
        </div>
        
        {/* Toggle Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

         {/* The collapsible content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active" href="#" role="button">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about" role="button">
                About us
              </a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
                <i className="fa-solid fa-chevron-down" id="btn"></i>
              </a>
              <ul className="dropdown-menu">
                <li className="text_box">
                  <h3>All Services</h3>
                  <p>Delivering Expert, reliable maintenance services</p>
                  <div className="button_div">
                    <a className="button" href="/services">See all services</a>
                    <a className="button butto_arrow" href="/services"><i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </li>

                <li>
                  <ul className="service">
                    <li>
                      <a 
                        className="dropdown-item" 
                        href="./pages/acmaintenanceservice.html" 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          columnGap: '10px'
                        }}
                      >
                        <div 
                          style={{
                            width: '32px',
                            height: '32px',
                            backgroundImage: 'url(./images/navbar/AC Maintenance.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }} 
                          aria-label="AC Maintenance"
                        />
                        <div>
                          <h5 style={{ margin: '0' }}>AC Maintenance</h5>
                          <span style={{ opacity: '.6' }}>04 categories</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a 
                        className="dropdown-item" 
                        href="./pages/fridgemaintenanceservice.html" 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          columnGap: '10px'
                        }}
                      >
                        <div 
                          style={{
                            width: '32px',
                            height: '32px',
                            backgroundImage: 'url(./images/navbar/Fridge Maintenance.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }} 
                          aria-label="Fridge Maintenance"
                        />
                        <div>
                          <h5 style={{ margin: '0' }}>Fridge Maintenance</h5>
                          <span style={{ opacity: '.6' }}>02 categories</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a 
                        className="dropdown-item" 
                        href="./pages/waterleakingservice.html" 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          columnGap: '10px'
                        }}
                      >
                        <img 
                          src="./images/navbar/Water leaking.png" 
                          alt="" 
                          style={{ width: '32px', height: '32px' }} 
                        />
                        <div>
                          <h5 style={{ margin: '0' }}>Water leaking</h5>
                          <span style={{ opacity: '.6' }}>03 categories</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a 
                        className="dropdown-item" 
                        href="./pages/acinstallationservice.html" 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          columnGap: '10px'
                        }}
                      >
                        <img 
                          src="./images/navbar/AC Installation.png" 
                          alt="" 
                          style={{ width: '32px', height: '32px' }} 
                        />
                        <div>
                          <h5 style={{ margin: '0' }}>AC Installation</h5>
                          <span style={{ opacity: '.6' }}>02 categories</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a 
                        className="dropdown-item" 
                        href="./pages/gasfillingservice.html" 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          columnGap: '10px'
                        }}
                      >
                        <img 
                          src="./images/navbar/Gas filling service.png" 
                          alt="" 
                          style={{ width: '32px', height: '32px' }} 
                        />
                        <div>
                          <h5 style={{ margin: '0' }}>Gas filling service</h5>
                          <span style={{ opacity: '.6' }}>02 categories</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="etra_service">
                  <ul>
                    <li>
                      <a 
                        className="dropdown-item" 
                        href="./pages/customservice.html" 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          columnGap: '10px'
                        }}
                      >
                        <img 
                          src="./images/navbar/Custom service .png" 
                          alt="" 
                          style={{ width: '32px', height: '32px' }} 
                        />
                        <div>
                          <h5 style={{ margin: '0' }}>Custom service</h5>
                          <span style={{ opacity: '.6' }}>00 categories</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="./pages/allprojects.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
                <i className="fa-solid fa-chevron-down" id="btn"></i>
              </a>
              <ul className="dropdown-menu second">
                <li className="text_box">
                  <h3>All projects</h3>
                  <p>Showcasing our key projects that highlight our expertise</p>
                  <div className="button_div">
                    <a className="button" href="./pages/allprojects.html">See all projects</a>
                    <a className="button butto_arrow" href="#"><i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </li>

                <li>
                  <ul className="service">
                    <li>
                      <a 
                        className="dropdown-item" 
                        href="./pages/acinstallationptoject.html" 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          columnGap: '10px'
                        }}
                      >
                        <img 
                          src="./images/navbar/AC Maintenance.png" 
                          alt="" 
                          style={{ width: '32px', height: '32px' }} 
                        />
                        <div>
                          <h5 style={{ margin: '0' }}>AC Maintenance</h5>
                          <span style={{ opacity: '.6' }}>LG company, Doha, Qatar</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a 
                        className="dropdown-item" 
                        href="./pages/waterleakingrepairproject.html" 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          columnGap: '10px'
                        }}
                      >
                        <img 
                          src="./images/navbar/Water leaking.png" 
                          alt="" 
                          style={{ width: '32px', height: '32px' }} 
                        />
                        <div>
                          <h5 style={{ margin: '0' }}>Water leaking</h5>
                          <span style={{ opacity: '.6' }}>Carrier, Al Wakrah, Qatar</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a 
                        className="dropdown-item" 
                        href="./pages/fridgemaintenancerepairproject.html" 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          columnGap: '10px'
                        }}
                      >
                        <img 
                          src="./images/navbar/Fridge Maintenance.png" 
                          alt="" 
                          style={{ width: '32px', height: '32px' }} 
                        />
                        <div>
                          <h5 style={{ margin: '0' }}>Fridge repair</h5>
                          <span style={{ opacity: '.6' }}>Daikin, Al Rayyan, Qatar</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a 
                        className="dropdown-item" 
                        href="./pages/gasfillingmaintenanceproject.html" 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          columnGap: '10px'
                        }}
                      >
                        <img 
                          src="./images/navbar/Gas filling service.png" 
                          alt="" 
                          style={{ width: '32px', height: '32px' }} 
                        />
                        <div>
                          <h5 style={{ margin: '0' }}>Gas filling service</h5>
                          <span style={{ opacity: '.6' }}>Mitsubishi, Madinat ash Shamal, Qatar</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a 
                        className="dropdown-item" 
                        href="./pages/acinstallationptoject.html" 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          columnGap: '10px'
                        }}
                      >
                        <img 
                          src="./images/navbar/AC Installation.png" 
                          alt="" 
                          style={{ width: '32px', height: '32px' }} 
                        />
                        <div>
                          <h5 style={{ margin: '0' }}>AC Installation</h5>
                          <span style={{ opacity: '.6' }}>Sony, Lusail, Qatar</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                
                <li className="etra_service">
                  <ul>
                    <li>
                      <a 
                        className="dropdown-item" 
                        href="./pages/gasfillingservice.html" 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          columnGap: '10px'
                        }}
                      >
                        <img 
                          src="./images/navbar/Gas filling service.png" 
                          alt="" 
                          style={{ width: '32px', height: '32px' }} 
                        />
                        <div>
                          <h5 style={{ margin: '0' }}>Gas filling service</h5>
                          <span style={{ opacity: '.6' }}>Mitsubishi, Madinat</span>
                          <br />
                          <span style={{ opacity: '.6' }}>ash Shamal, Qatar</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" role="button">
                Career
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="./pages/contactus.html" role="button">
                Contact us
              </a>
            </li>
          </ul>

          {/* <!-- number --> */}
          <div className="navbar_button">
            <a className="button call-button" href="tel:+97466325019">
                <i style={{ marginRight: '6px' }} className="fa-solid fa-phone"></i>+974 66325019
            </a>
          </div>
          {/* <!-- number --> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;