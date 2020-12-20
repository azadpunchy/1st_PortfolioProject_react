import React from "react";
import Common from "./Common";
import Web from "./logo.svg";
const Home = () => {
  return (
    <>
      <Common
        head1="Grow your business with "
        imgsrc={Web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};
export default Home;
