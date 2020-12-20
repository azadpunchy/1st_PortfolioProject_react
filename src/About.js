import React from "react";
import Common from "./Common";
import web from "./logo.svg";

const About = () => {
  return (
    <>
      <Common
        head1="I am About Page "
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};
export default About;
