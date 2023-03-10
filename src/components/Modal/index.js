import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Modal.css";

const Modal = ({ setShowModal, selectedNFT }) => {
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <FaTimes onClick={() => setShowModal(false)} />
        </span>
        <h6 className="absolute-center">{selectedNFT.user_name}</h6>
        <div className="tc-inner-wrapper modal-img-wrapper">
          <div className="tc-content">
            <img src={selectedNFT.banner} alt={selectedNFT.user_name} />
          </div>
        </div>

        <div className="modal-text-details">
          <div className="modal-price">
            <p>Current Price</p>
            <h4>
              {selectedNFT.priceInET} ETH{" "}
              <span>${selectedNFT.priceInDollars}</span>
            </h4>
          </div>
          <div className="modal-address">
            <p>Contract Address</p>
            <small>{selectedNFT.contact_address}</small>
          </div>
          <div className="modal-description">
            <p>Description</p>
            <small>{selectedNFT.description}</small>
          </div>
        </div>
        <div className="button--wrapper">
          <a target="_blank" rel="noreferrer" href={selectedNFT.link}>
            Purchase
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
