import React from "react";
import "./Button.css";

const Button = ({ btnType, btnText, btnOnClick, customClass }) => {
  return (
    <div
      className={`${
        btnType === "PRIMARY"
          ? `button primary-btn ${customClass}`
          : `button secondary-btn ${customClass}`
      } `}
      onClick={btnOnClick}
    >
      {btnText}
    </div>
  );
};

export default Button;
