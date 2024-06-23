import React from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";

const Card = ({ card }) => {
  return (
    <div className="card-box-custom">
      <div className="carousel-custom">
        <Carousel
          showArrows={true} // Show arrow navigation
          showThumbs={false} // Hide thumbnail navigation
          showStatus={false} // Hide status indicator
          infiniteLoop={true} // Enable infinite loop
          autoPlay={true} // Auto play slides
          interval={5000} // Interval between slides in milliseconds
          className="carousel-inner-custom"
        >
          {card.imgSrc.map((src, index) => (
            <div key={index} className="carousel-image-container">
              <img src={src} className="card-img-custom" alt={`Slide ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="card-info-flex-custom">
        <div>
          <h3 className="card-title">{card.title}</h3>
          <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.desc}</p>
          <p style={{ margin: 0, color: "var(--font-grey)" }}>Location: {card.location}</p>
        </div>
        <div className="card-rating-custom">
          <StarRateRoundedIcon style={{ fontSize: "1.2rem" }} />
          <p style={{ margin: 0, paddingLeft: "0.25rem" }}>{card.rating}</p>
        </div>
      </div>
      <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black)" }}>
        <span style={{ fontWeight: "600" }}>₹{card.price}</span> night
      </p>
    </div>
  );
};

export default Card;
