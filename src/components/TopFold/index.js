import React from "react";
import Button from "../../common/Button";
import "./topFold.css";

const TopFold = () => {
  return (
    <div className="topfold absolute-center">
      <div className="tf-left">
        <h3 className="tf-heading">
          Discover collect, & sell{" "}
          <span className="heading-gradient">Extraordinary</span> NFTs
        </h3>
        <p className="tf-description">
          Please make sure that you are buying and selling the most trending NFT
          out there
        </p>
        <div className="tf-left-btns">
          <Button btnType="PRIMARY" btnText="EXPLORE" />
          <Button
            btnType="SECONDARY"
            btnText="Create"
            customClass="tf-left-secondary-btn"
          />
        </div>
        <div className="tf-left-infoStats">
          <div className="tf-is-infoItem absolute-center">
            <h3 className="tf-infoItem-count">200K+</h3>
            <h5 className="tf-infoItem-label">Collections</h5>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <h3 className="tf-infoItem-count">10K+</h3>
            <h5 className="tf-infoItem-label">Artists</h5>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <h3 className="tf-infoItem-count">423K+</h3>
            <h5 className="tf-infoItem-label">Community</h5>
          </div>
        </div>
      </div>
      <div className="tf-right">
        <div className="tf-right-bg-blob"></div>
        <div className="tf-right-diamond">
          <div className="tf-right-diamond-item absolute-center">
            <img
              src="https://openseauserdata.com/files/22284fa002c7612a875381ab66b22abf.gif"
              alt="diamond banner"
              className="tf-right-diamond-img"
            />
          </div>
          <div className="tf-right-diamond-item absolute-center">
            <img
              src="https://openseauserdata.com/files/c3a312c53514642e8041c65e10b40a52.gif"
              alt="diamond banner"
              className="tf-right-diamond-img"
            />
          </div>
          <div className="tf-right-diamond-item absolute-center">
            <img
              src="https://openseauserdata.com/files/24ed399dc3e5430b39a1db656f68c67c.gif"
              alt="diamond banner"
              className="tf-right-diamond-img"
            />
          </div>
          <div className="tf-right-diamond-item absolute-center">
            <img
              src="https://openseauserdata.com/files/0895e82346f5c31462d41ab75d9b90b1.gif"
              alt="diamond banner"
              className="tf-right-diamond-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFold;
