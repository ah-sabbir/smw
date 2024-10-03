import React from 'react'
// import Link from 'next/link';
import Image from 'next/image';
import "./brandlist.css"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BrandList = () => {
  return (
 
<section id="brand_list">

  <p className="text-center">Trusted by 100+ business</p>

  <div className="container">
    <div className="listing">

    <div className="brand">
      <Image src="/images/brand/carrier_logo.svg.png" alt="arrier_logo.svg.png" width={120} height={32}/>
    </div>
    <div className="brand">
      <Image src="/images/brand/Group.png" alt="Group.png" width={120} height={32}/>
    </div>
    <div className="brand">
      <Image src="/images/brand/image 437.png" alt="image 437.png" width={120} height={32}/>
    </div>
    <div className="brand">
      <Image src="/images/brand/Group (1).png" alt="Group (1).png" width={120} height={32}/>
    </div>
    <div className="brand">
      <Image src="/images/brand/Group (2).png" alt="Group (2).png" width={120} height={32}/>
    </div>
  </div>

  <div className="listing brandsecond">
    <div className="brand">
      <Image src="/images/brand/panasonic_usa_logo.svg.png" alt="panasonic_usa_logo.svg.png" width={120} height={32}/>
    </div>
    <div className="brand">
      <Image src="/images/brand/Logo.svg (1).png" alt="Logo.svg (1).png" width={120} height={32}/>
    </div>
    <div className="brand">
      <Image src="/images/brand/mitsubishi_electric_logo.svg.png" alt="mitsubishi_electric_logo.svg.png" width={120} height={32}/>
    </div>
    <div className="brand">
      <Image src="/images/brand/Logo.svg.png" alt="Logo.svg.png" width={120} height={32}/>
    </div>
  </div>
</div>
</section>
  )
}

export default BrandList;