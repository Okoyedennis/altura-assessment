import React, { useState } from "react";
import "./TrendingNfts.css";
import Slider from "react-slick";
import { TRENDING_NFTS } from "../../data/trendingNfts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendingCard from "./TrendingCard";
import Modal from "../Modal";

const TrendingNfts = () => {
  const [showModal, setShowModal] = useState(false);
  const [responsive, setResponsive] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState([]);

  const changeScreenWidth = () => {
    window.innerWidth <= 768 ? setResponsive(true) : setResponsive(false);
  };

  window.addEventListener("resize", changeScreenWidth);

  const handleModel = () => {
    setShowModal(true);
  };

   const viewCard = (item) => {
     setSelectedNFT(item);
     console.log(item.id);
     handleModel()
   };

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: responsive ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <div className="trending-nfts">
      <h3 className="tn-title absolute-center">
        <span className="heading-gradient">TRENDING NFTs</span>
      </h3>
      <div className="tn-bg-blob"></div>
      <Slider {...settings}>
        {TRENDING_NFTS.map((_ngt) => (
          <TrendingCard
            nft={_ngt}
            key={_ngt.id}
            viewCard={viewCard}
          />
        ))}
      </Slider>
      {showModal && (
        <Modal setShowModal={setShowModal} selectedNFT={selectedNFT} />
      )}
    </div>
  );
};

export default TrendingNfts;
