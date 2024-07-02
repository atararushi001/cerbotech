import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";
import Image from 'next/image'; // Ensure this import is at the top of your file
import img1 from "/public/images/servervices_one.png";
import img2 from "/public/images/servervices_two.png";
import img3 from "/public/images/servervices_three.png";

const Features = () => {
  return (
    <>
      <div className="boxes-area">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box">
                {/* <div className="icon"> */}
                  {/* <Icon.Server /> */}
                  <Image src={img1} alt="logo" width={150} height={80} />
                {/* </div> */}

                <h3>
                  <Link href="/features/feature-details/">Brainwave Neurotransmitter Test (Before Enrollment) </Link>
                </h3>

                {/* <p>
                  Whether you're a partner, a vendor, an employee, or a
                  franchisee, adhering to these guidelines will help us keep the
                  Cerbotech brand strong and clear.
                </p> */}
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box bg-f78acb">
                {/* <div className="icon">
                  <Icon.Code />
                </div> */}
   <Image src={img2} alt="logo" width={150} height={80} />
                <h3>
                  <Link href="/features/feature-details/">
                  Brainhat Series
                  </Link>
                </h3>

                {/* <p>
                  We understand that the information in these guidelines may
                  need to be adapted to fit different contexts and formats.
                </p> */}
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box bg-c679e3">
                {/* <div className="icon">
                  <Icon.Users />
                </div> */}
   <Image src={img3} alt="logo" width={150} height={80} />
                <h3>
                  <Link href="/features/feature-details/">Brainwave
Neurotransmitter Test
(After Module Completion)</Link>
                </h3>

                {/* <p>
                  Our goal is for these guidelines to be useful, clear, and
                  flexible. But most importantly, we hope that they will help us
                  continue to convey the essence of Cerbotech.
                </p> */}
              </div>
            </div>
{/* 
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box bg-eb6b3d">
                <div className="icon">
                  <Icon.GitBranch />
                </div>

                <h3>
                  <Link href="/features/feature-details/">
                    Access Controlled
                  </Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
