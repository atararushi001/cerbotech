import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg from "/public/images/iot-banner-image/iot-main-img1.png";
import iotShape1 from "/public/images/iot-banner-image/iot-shape1.png";

const MainBanner = () => {
  return (
    <>
      <div className="iot-main-banner">
        <div className="container">
          <div className="iot-banner-content">
            <span
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              {/* Internet of Things */}
            </span>

            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
             Beyond the Brain: Unleashing Infinite Potentia
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
             Cerbotech has grown and evolved over the years, yet our brand essence remains consistent: To empower individuals through innovative, science-backed cognitive training programs.
            </p>

            <Link
              href="/contact"
              className="btn btn-primary"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Get Started
            </Link>
          </div>

          <div className="iot-banner-image">
            <Image
              src={bannerImg}
              className="animate__animated animate__fadeInUp animate__delay-0.8s"
              alt="image"
              width={837}
              height={447}
            />

            <Image
              src={iotShape1}
              className="animate__animated animate__zoomIn"
              alt="image"
              width={247}
              height={247}
            />
          </div>

          <div className="animate-border">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
