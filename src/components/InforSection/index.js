import React from "react";
import { INFO_ITEMS } from "../../data/infoItems";
import Infoitem from "./Infoitem";
import "./InforSection.css";

const InforSection = () => {
  return (
    <div className="info-section">
      <div className="info-section-heading absolute-center">
        <span className="heading-gradient">Create and sell your NFTs</span>
          </div>
          <div className="info-section-item-container">
              {INFO_ITEMS.map((_infoItem) => (
                  <Infoitem item={_infoItem} />
              ))}
          </div>
    </div>
  );
};

export default InforSection;
