import React from "react";
import Navbar from "@/components/_App/Navbar";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import AboutUsContent1 from "@/components/AboutUs/AboutUsContent1";

const About = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="About Us" />

      <AboutUsContent1 />
      <div className="team-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Concept</h2>
            <div className="bar"></div>
            <p>
              We Blend Modern Technologies Like Brain Compute Interface
              Technology and Ancient Brain Capacity Enhancing Methodology to
              enhance Brain Skills.
            </p>
            <p>
              Our programs comprise of Fun filled, Do It Yourself Activities
              which improve Brain Skills and help children in delivering
              excellent Academic Peformance.
            </p>
          </div>
        </div>
      </div>
      {/* <Team /> */}

      {/* <Partner /> */}

      {/* <FunFactsArea /> */}

      <Footer />
    </>
  );
};

export default About;
