import React from "react";
import "./Footer.css";
import { AiFillFire } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer absolute-center">
      <span className="heading-gradient">
        Made with <AiFillFire /> by Dennis
      </span>
    </div>
  );
};

export default Footer;
