import React from "react";

const Footer = () => {
  const ayear = new Date().getFullYear;
  return (
    <>
      <footer className="w-100 mb-0 mt-0 bg-light text-center">
        <p>
          {ayear} ©️ Copyright azadpunchy all right reserved | Term and
          Conditions Applies
        </p>
      </footer>
    </>
  );
};

export default Footer;
