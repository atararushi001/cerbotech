import React from "react";
import Link from "next/link";
import Image from "next/image";

import featureImg1 from "/public/images/iot-features-image/iot-feature-image1.png";
import featureImg2 from "/public/images/iot-features-image/iot-feature-image2.png";

const Features = () => {
  return (
    <>
      <div className="iot-features-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 iot-features-content">
              <h3>App Based Activities</h3>
              {/* <p>
              All Cognitive Skills Improvement Modules are packed with Do It Yourself,
multi-dimensional and Fun -Filled Activities to Improve Brain Skills
              </p>
              <p>
              Inbuilt Daily Performance Evaluation Report
              </p>
              <p>
              Activity Reminders
              </p>
              <p>
        
Tailor-Made Modules for Focus, Memory and other Brain Skills.
              </p> */}
              <ul>
  <li> <p> All Cognitive Skills Improvement Modules are packed with Do It Yourself, multi-dimensional and Fun -Filled Activities to Improve Brain Skills </p></li>
  <li> <p> Inbuilt Daily Performance Evaluation Report </p></li>
  <li> <p> Activity Reminders </p></li>
  <li>  <p>Tailor-Made Modules for Focus, Memory and other Brain Skills. </p></li>
</ul>
              {/* <Link href="#" className="btn btn-primary">
                Explore More
              </Link> */}
            </div>

            <div
              className="col-lg-6 iot-features-image"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <Image src={featureImg1} alt="image" width={499} height={370} />
            </div>
          </div>
        </div>
      </div>

      <div className="iot-features-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 iot-features-image"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <Image src={featureImg2} alt="image" width={474} height={433} />
            </div>

            <div className="col-lg-6 iot-features-content">
              <h3>IMPORTANT FEATURES OF OUR EXCLUSIVE TECHNOLOGY  <p style={{color: '#6084a4'}}>
                  Brain Neurocognitive Test (BNT)
                </p>  </h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus.
              </p> */}
<ul>
  <li>
    <p>Instant Tangible and Accurate Report</p>
  </li>
  <li>
    <p>Detailed and self-explanatory</p>
  </li>
  <li>
    <p>Non Invasive Device so Completely Safe</p>
  </li>
  <li>
    <p>Brain Profile based on real-time Brain waves</p>
  </li>
</ul>
              {/* <Link href="#" className="btn btn-primary">
                Explore More
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
