import React from "react";
import "./TrendingCard.css";

const TrendingCard = ({ nft, viewCard }) => {

  const truncate = (text, n) => {
    return text.length > n ? text.substring(0, n) + "..." : text;
  };

  return (
    <div
      className="trending-card absolute-center"
      onClick={() => viewCard(nft)}
    >
      <div className="tc-inner-wrapper">
        <div className="tc-content">
          <img alt={nft.user_name} src={nft.banner} className="tc-banner" />
          <div className="tc-user-info">
            <div className="tc-ui-left">
              <img
                src={nft.user_photo}
                alt={nft.user_name}
                className="tc-user-logo"
              />
              <div>
                <div className="tc-ui-username">
                  {truncate(nft.user_name, 15)}
                </div>
                <div className="tc-ui-userhandle">
                  Owned by: <span>{nft.userhandle}</span>
                </div>
              </div>
            </div>
            <img
              src="https://openseauserdata.com/files/265128aa51521c90f7905e5a43dcb456_new.svg"
              alt="ETH ON SOLANA"
              className="tc-solana-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
