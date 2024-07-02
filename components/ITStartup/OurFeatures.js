import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const OurFeatures = () => {
  return (
    <>
      <div className="features-area pt-80 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2> Brand Values </h2>
            <div className="bar"></div>
            <p>
          
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon">
                  <Icon.Settings />
                </div>
                <h3>
                  <Link href="/features/feature-details/">Accessibility:</Link>
                </h3>
                <p>
             We strive to create programs and technologies that are user-friendly, understandable, and accessible to
individuals from all walks of life.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>
                  <Link href="/features/feature-details/">Empowerment</Link>
                </h3>
                <p>
                 We believe in equipping individuals with the tools and knowledge they need to take control of their mental
                wellness and cognitive capabilities.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Grid />
                </div>
                <h3>
                  <Link href="/features/feature-details/">Integrity:</Link>
                </h3>
                <p>
           We hold ourselves to the highest ethical standards in all we do, from our research practices to our customer service
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Info />
                </div>
                <h3>
                  <Link href="/features/feature-details/">Community: </Link>
                </h3>
                <p>
                We value the community we serve and aim to foster a sense of belonging and inclusivity among our users
                </p>
              </div>
              
            </div>

            <div
              className="col-lg-12 col-md-12"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Box />
                </div>
                <h3>
                  <Link href="/features/feature-details/">Innovation</Link>
                </h3>
                <p>
                We are committed to staying at the cutting edge of cognitive science, always exploring new ways to enhance our
                offerings and better serve our customers.
                </p>
              </div>
            </div>

            {/* <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link href="/features/feature-details/">Deadline Reminders</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeatures;
