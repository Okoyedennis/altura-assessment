import React from "react";
import "./Infoitem.css";

const Infoitem = ({ item }) => {
  return (
    <div className="info-item absolute-center">
      <item.icon
        className="info-item-icon"
      />
      <h3 className="info-item-title">{item.section_title}</h3>
      <p className="info-item-description">{item.description}</p>
    </div>
  );
};

export default Infoitem;
